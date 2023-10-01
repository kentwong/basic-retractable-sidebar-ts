import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "./Sidebar"; // Adjust the import path as needed

// Mock the onFormSwitch and onToggleSidebar functions
const mockOnFormSwitch = jest.fn();
const mockOnToggleSidebar = jest.fn();

// Helper function to render Sidebar with props
const renderSidebar = (props: { activeForm?: "A" | "B"; expanded?: boolean }) => {
  return render(
    <Sidebar
      activeForm={props.activeForm || "A"}
      onFormSwitch={mockOnFormSwitch}
      expanded={props.expanded || false}
      onToggleSidebar={mockOnToggleSidebar}
    />
  );
};

describe("Sidebar component", () => {
  it("renders with default props", () => {
    renderSidebar({});
    
    // Check if the Sidebar is rendered
    const sidebarElement = screen.getByTestId("sidebar");
    expect(sidebarElement).toBeInTheDocument();

    // Check if Button A is rendered and active
    const buttonAElement = screen.getByText("Button A");
    expect(buttonAElement).toBeInTheDocument();
    expect(buttonAElement).toHaveClass("active");

    // Check if Button B is rendered but not active
    const buttonBElement = screen.getByText("Button B");
    expect(buttonBElement).toBeInTheDocument();
    expect(buttonBElement).not.toHaveClass("active");
  });

  it("handles form switch correctly", () => {
    renderSidebar({ activeForm: "B" });

    // Click Button A
    const buttonAElement = screen.getByText("Button A");
    fireEvent.click(buttonAElement);

    // Check if onFormSwitch was called with "A"
    expect(mockOnFormSwitch).toHaveBeenCalledWith("A");
  });

  it("handles sidebar toggle correctly", () => {
    renderSidebar({ expanded: false });

    // Click the toggle button
    const toggleButtonElement = screen.getByTestId("toggle-button");
    fireEvent.click(toggleButtonElement);

    // Check if onToggleSidebar was called
    expect(mockOnToggleSidebar).toHaveBeenCalled();
  });
});
