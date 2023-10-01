import React from "react";
import { render, screen } from "@testing-library/react";
import FormA from "./FormA"; // Adjust the import path as needed

describe("FormA component", () => {
  it("renders Form A fields and elements correctly", () => {
    render(<FormA />);

    // You can write assertions to check if specific elements are present
    expect(screen.getByLabelText("Field A:")).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Field A:" })).toBeInTheDocument();

  });
});
