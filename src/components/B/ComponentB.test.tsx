import React from "react";
import { render } from "@testing-library/react";
import ComponentB from "./ComponentB"; // Make sure to provide the correct import path

test("renders ComponentB correctly", () => {
  const { getByText } = render(<ComponentB />);

  // Assert that the component renders the expected text elements
  expect(getByText("Component B")).toBeInTheDocument();
  expect(getByText("This is Component B. You can add your content here.")).toBeInTheDocument();

  // You can add more assertions as needed for your component's structure and behavior.
});
