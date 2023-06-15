import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../src/views/home";
import "@testing-library/jest-dom/extend-expect";

describe("Home", () => {
  test("renders the home component with the correct image", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const imageElement = screen.getByRole("img");

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      "../../../public/Images/Age-of-banner.jpg"
    );
  });
});
