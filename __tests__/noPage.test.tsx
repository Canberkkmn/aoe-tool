import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { useRouteError } from "react-router-dom";
import NoPage from "../src/views/nopage";

jest.mock("react-router-dom", () => ({
  useRouteError: jest.fn(),
}));

describe("NoPage", () => {
  test("renders the error page with the error message", () => {
    const errorMessage = "Test error message";
    (useRouteError as jest.Mock).mockReturnValue(new Error(errorMessage));

    render(<NoPage />);

    const errorPage = screen.getByTestId("error-page");
    expect(errorPage).toBeInTheDocument();

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Oops!");

    const errorMessageElement = screen.getByText(errorMessage);
    expect(errorMessageElement).toBeInTheDocument();
  });

  test("renders the error page with a default message if no error is provided", () => {
    (useRouteError as jest.Mock).mockReturnValue(undefined);

    render(<NoPage />);

    const errorPage = screen.getByTestId("error-page");
    expect(errorPage).toBeInTheDocument();

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Oops!");

    const defaultMessage = screen.getByText(
      "Sorry, an unexpected error has occurred."
    );
    expect(defaultMessage).toBeInTheDocument();
  });
});
