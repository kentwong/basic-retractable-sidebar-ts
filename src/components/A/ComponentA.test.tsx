import React from "react";
import { render } from "@testing-library/react";
import ComponentA from "./ComponentA";

test("renders ComponentA correctly", () => {
  const { getByText } = render(<ComponentA />);

  // Assert that the component renders the expected text elements
  expect(getByText("Component A")).toBeInTheDocument();
  expect(getByText("This is Component A. You can add your content here.")).toBeInTheDocument();
});
