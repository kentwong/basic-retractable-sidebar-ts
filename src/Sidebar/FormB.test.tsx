import React from "react";
import { render, screen } from "@testing-library/react";
import FormB from "./FormB"; // Adjust the import path as needed

describe("FormB component", () => {
  it("renders Form B fields and elements correctly", () => {
    render(<FormB />);

    // You can write assertions to check if specific elements are present
    expect(screen.getByLabelText("Field B:")).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Field B:" })).toBeInTheDocument();

    // Add more assertions for other form fields as needed
  });
});
