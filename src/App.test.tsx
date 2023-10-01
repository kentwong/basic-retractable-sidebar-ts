import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders the initial state correctly", () => {
    render(<App />);

    // Check if the App component is rendered
    const appElement = screen.getByTestId("app");
    expect(appElement).toBeInTheDocument();

    // Check if the Sidebar and MainArea components are rendered
    const sidebarElement = screen.getByTestId("sidebar");
    const mainAreaElement = screen.getByTestId("main-area");
    expect(sidebarElement).toBeInTheDocument();
    expect(mainAreaElement).toBeInTheDocument();

    // Check if the Sidebar is expanded by default
    expect(sidebarElement).toHaveClass("expanded");

    // Check if Form A is the active form by default
    const buttonAElement = screen.getByText("Button A");
    const buttonBElement = screen.getByText("Button B");
    expect(buttonAElement).toBeInTheDocument();
    expect(buttonBElement).toBeInTheDocument();
    expect(buttonAElement).toHaveClass("active");
    expect(buttonBElement).not.toHaveClass("active");
  });

  it("handles form switch correctly", () => {
    render(<App />);

    // Click Button B to switch to Form B
    const buttonBElement = screen.getByText("Button B");
    fireEvent.click(buttonBElement);

    // Check if Form B becomes the active form
    expect(buttonBElement).toHaveClass("active");

    // Click Button A to switch back to Form A
    const buttonAElement = screen.getByText("Button A");
    fireEvent.click(buttonAElement);

    // Check if Form A becomes the active form again
    expect(buttonAElement).toHaveClass("active");
  });

  it("handles sidebar toggle correctly", () => {
    render(<App />);

    // Click the toggle button to collapse the sidebar
    const toggleButtonElement = screen.getByTestId("toggle-button");
    fireEvent.click(toggleButtonElement);

    // Check if the sidebar is collapsed
    const sidebarElement = screen.getByTestId("sidebar");
    expect(sidebarElement).not.toHaveClass("expanded");

    // Click the toggle button again to expand the sidebar
    fireEvent.click(toggleButtonElement);

    // Check if the sidebar is expanded again
    expect(sidebarElement).toHaveClass("expanded");
  });
});
