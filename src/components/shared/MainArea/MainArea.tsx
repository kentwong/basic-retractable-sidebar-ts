import React, { FC } from "react";
import ComponentA from "../../A/ComponentA"; // Import ComponentA
import ComponentB from "../../B/ComponentB"; // Import ComponentB

interface MainAreaProps {
  activeForm: "A" | "B";
  expanded: boolean;
}

const MainArea: FC<MainAreaProps> = ({ activeForm, expanded }) => {
  return (
    <div className={`main-area ${expanded ? "expanded" : ""}`} data-testid="main-area">
      {activeForm === "A" && <ComponentA />}
      {activeForm === "B" && <ComponentB />}
    </div>
  );
};

export default MainArea;
