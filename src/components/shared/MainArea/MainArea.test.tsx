import React from "react";
import { render, screen } from "@testing-library/react";
import MainArea from "./MainArea";

// Test cases for MainArea component
describe("MainArea component", () => {
  it("renders with ComponentA when activeForm is 'A'", () => {
    const { container } = render(<MainArea activeForm="A" expanded={false} />);
    const mainAreaElement = screen.getByTestId("main-area");
    const componentAElement = screen.getByTestId("component-a");

    expect(mainAreaElement).toBeInTheDocument();
    expect(componentAElement).toBeInTheDocument();
    expect(container.querySelector(".expanded")).toBeNull();
  });

  it("renders with ComponentB when activeForm is 'B'", () => {
    const { container } = render(<MainArea activeForm="B" expanded={true} />);
    const mainAreaElement = screen.getByTestId("main-area");
    const componentBElement = screen.getByTestId("component-b");

    expect(mainAreaElement).toBeInTheDocument();
    expect(componentBElement).toBeInTheDocument();
    expect(container.querySelector(".expanded")).toBeInTheDocument();
  });
});
