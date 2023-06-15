import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import * as reactRedux from "react-redux";
import { MemoryRouter, useLocation } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import { getInitialUnitData } from "../src/redux/actions/unitAction";
import UnitDetail from "../src/views/unitDetail";

const mockStore = configureMockStore();
const initialState = {
  unitReducer: {
    initialUnitData: [
      {
        id: 1,
        name: "Archer",
        expansion: "Age of Kings",
        age: "Feudal",
        created_in: "Archery Range",
        cost: {
          Wood: 25,
          Gold: 45,
        },
        build_time: 35,
        reload_time: 2,
        movement_rate: 0.96,
        line_of_sight: 6,
        hit_points: 4,
        attack: 4,
        armor: "0/0",
        attack_bonus: ["vs Spearman +3", "vs Skirmisher +3", "vs Archer +3"],
        accuracy: "80%",
      },
    ],
  },
};
const store = mockStore(initialState);

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
}));

describe("UnitDetail", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("renders the unit detail component with data", () => {
    const mockedDispatch = jest.fn();
    const mockLocation = {
      pathname: "/unit-detail/1",
    };

    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(mockedDispatch);
    jest
      .spyOn(reactRedux, "useSelector")
      .mockReturnValue(initialState.unitReducer);
    (useLocation as jest.Mock).mockReturnValue(mockLocation);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/unit-detail/1"]}>
          <UnitDetail />
        </MemoryRouter>
      </Provider>
    );

    const unitDetailContainer = screen.getByTestId("unit-detail-container");
    expect(unitDetailContainer).toBeInTheDocument();

    expect(mockedDispatch).toHaveBeenCalledTimes(1);
    expect(mockedDispatch).toHaveBeenCalledWith(getInitialUnitData());

    const unitPropertyList = screen.queryByTestId("unit-property-list");
    const placeholderElement = screen.queryByTestId("unit-detail-placeholder");
    expect(unitPropertyList || placeholderElement).toBeInTheDocument();
  });

  test("renders the unit property list", () => {
    const mockLocation = {
      pathname: "/unit-detail/1",
    };

    jest
      .spyOn(reactRedux, "useSelector")
      .mockReturnValue(initialState.unitReducer.initialUnitData);
    (useLocation as jest.Mock).mockReturnValue(mockLocation);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/unit-detail/1"]}>
          <UnitDetail />
        </MemoryRouter>
      </Provider>
    );

    const unitPropertyList = screen.getByTestId("unit-property-list");
    expect(unitPropertyList).toBeInTheDocument();
  });

  test("renders the unit property items", () => {
    const mockLocation = {
      pathname: "/unit-detail/1",
    };

    jest
      .spyOn(reactRedux, "useSelector")
      .mockReturnValue(initialState.unitReducer.initialUnitData);
    (useLocation as jest.Mock).mockReturnValue(mockLocation);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/unit-detail/1"]}>
          <UnitDetail />
        </MemoryRouter>
      </Provider>
    );

    const unitPropertyItems = screen.getAllByTestId("unit-property-item");
    expect(unitPropertyItems).toHaveLength(14);
  });

  test("renders the unit property item values", () => {
    const mockLocation = {
      pathname: "/unit-detail/1",
    };

    jest
      .spyOn(reactRedux, "useSelector")
      .mockReturnValue(initialState.unitReducer.initialUnitData);
    (useLocation as jest.Mock).mockReturnValue(mockLocation);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/unit-detail/1"]}>
          <UnitDetail />
        </MemoryRouter>
      </Provider>
    );

    const unitPropertyItemValues = screen.getAllByTestId(
      "unit-property-item-value"
    );
    expect(unitPropertyItemValues).toHaveLength(14);
  });

  test("renders the unit property item dividers", () => {
    const mockLocation = {
      pathname: "/unit-detail/1",
    };

    jest
      .spyOn(reactRedux, "useSelector")
      .mockReturnValue(initialState.unitReducer.initialUnitData);
    (useLocation as jest.Mock).mockReturnValue(mockLocation);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/unit-detail/1"]}>
          <UnitDetail />
        </MemoryRouter>
      </Provider>
    );

    const unitPropertyItemDividers = screen.getAllByTestId(
      "unit-property-item-divider"
    );
    expect(unitPropertyItemDividers).toHaveLength(13);
  });

  test("dispatches getInitialUnitData action on mount", () => {
    const mockedDispatch = jest.fn();
    const mockLocation = {
      pathname: "/unit-detail/1",
    };

    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(mockedDispatch);
    jest
      .spyOn(reactRedux, "useSelector")
      .mockReturnValue(initialState.unitReducer.initialUnitData);
    (useLocation as jest.Mock).mockReturnValue(mockLocation);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/unit-detail/1"]}>
          <UnitDetail />
        </MemoryRouter>
      </Provider>
    );

    expect(mockedDispatch).toHaveBeenCalledWith(getInitialUnitData());
  });
});
