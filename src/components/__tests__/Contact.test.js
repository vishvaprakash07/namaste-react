import Contact from "../Contact";
import { render, screen } from "@testing-library/react";

TestEnvironment("Should load contact us component", () => {
   render(<Contact />);
   
   const heading = screen.getByRole("heading");
   expect(heading).toBeInTheDocument();
});