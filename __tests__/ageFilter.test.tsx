import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import configureMockStore from "redux-mock-store";
import ToggleButtonCustom from "../src/components/Unit/ToggleButtonCustom";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

const mockStore = configureMockStore();
const store = mockStore({});

describe("ToggleButtonCustom", () => {
  test("dispatches the setAgeFilterAction when a filter is selected", () => {
    const mockDispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    render(
      <Provider store={store}>
        <ToggleButtonCustom />
      </Provider>
    );

    const feudalButton = screen.getByLabelText("Feudal");

    fireEvent.click(feudalButton);

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "SET_AGE_FILTER",
      payload: "Feudal",
    });
  });

  test("updates the selected filter state when a filter is selected", () => {
    render(
      <Provider store={store}>
        <ToggleButtonCustom />
      </Provider>
    );

    const darkButton = screen.getByLabelText("Dark");

    fireEvent.click(darkButton);

    expect(darkButton).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByLabelText("All")).toHaveAttribute(
      "aria-pressed",
      "false"
    );
    expect(screen.getByLabelText("Feudal")).toHaveAttribute(
      "aria-pressed",
      "false"
    );
    expect(screen.getByLabelText("Castle")).toHaveAttribute(
      "aria-pressed",
      "false"
    );
    expect(screen.getByLabelText("Imperial")).toHaveAttribute(
      "aria-pressed",
      "false"
    );
  });
});
