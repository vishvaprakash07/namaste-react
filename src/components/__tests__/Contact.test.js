import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact us component test cases", () => {
  test("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");
    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load name input inside contact us component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");
    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should have two textboxes inside Contact us component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    //Assertion
    expect(inputBoxes.length).toBe(3);
  });
});
 