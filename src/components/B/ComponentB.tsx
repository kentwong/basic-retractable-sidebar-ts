import React from "react";

const ComponentB: React.FC = () => {
  return (
    <div className="component-b" data-testid="component-b">
      <h2>Component B</h2>
      <p>This is Component B. You can add your content here.</p>
      <button>Button in Component B</button>
    </div>
  );
};

export default ComponentB;
