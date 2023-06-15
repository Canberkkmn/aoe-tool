import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "../src/components/Layout/Navbar";

describe("Navbar", () => {
  test("renders the correct title", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const titleElement = screen.getByText("Home");

    expect(titleElement).toBeInTheDocument();
  });

  test("renders the correct links", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const homeLink = screen.getByText("Home");
    const unitsLink = screen.getByText("Units");

    expect(homeLink).toHaveAttribute("href", "/");
    expect(unitsLink).toHaveAttribute("href", "/unit");
  });

  test("renders the correct title for unit-detail path", () => {
    render(
      <MemoryRouter initialEntries={["/unit-detail"]}>
        <Navbar />
      </MemoryRouter>
    );

    const titleElement = screen.getByText("Unit Detail Page");

    expect(titleElement).toBeInTheDocument();
  });

  test("renders the correct title for other paths", () => {
    render(
      <MemoryRouter initialEntries={["/some-other-path"]}>
        <Navbar />
      </MemoryRouter>
    );

    const titleElement = screen.getByText("404 Page");

    expect(titleElement).toBeInTheDocument();
  });
});
