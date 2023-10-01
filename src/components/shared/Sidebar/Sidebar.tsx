import React from "react";
import FormA from "../../A/FormA"; // Import FormA
import FormB from "../../B/FormB"; // Import FormB

interface SidebarProps {
  activeForm: "A" | "B";
  onFormSwitch: (form: "A" | "B") => void;
  expanded: boolean;
  onToggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeForm, onFormSwitch, expanded, onToggleSidebar }) => {
  return (
    <div className={`sidebar ${expanded ? "expanded" : ""}`} data-testid="sidebar">
      <button className="toggle-button" onClick={onToggleSidebar} data-testid="toggle-button">
        {expanded ? "<" : ">"}
      </button>
      <div className={`sidebar ${expanded ? "expanded" : ""}`}>
        <div className="buttons">
          <button onClick={() => onFormSwitch("A")} className={activeForm === "A" ? "active" : ""}>
            Button A
          </button>
          <button onClick={() => onFormSwitch("B")} className={activeForm === "B" ? "active" : ""}>
            Button B
          </button>
        </div>
        <form className="form">
          {activeForm === "A" && <FormA />} {/* Render FormA */}
          {activeForm === "B" && <FormB />} {/* Render FormB */}
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
