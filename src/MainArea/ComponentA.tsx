import React from "react";

const ComponentA: React.FC = () => {
  return (
    <div className="component-a" data-testid="component-a">
      <h2>Component A</h2>
      <p>This is Component A. You can add your content here.</p>
      <button>Button in Component A</button>
    </div>
  );
};

export default ComponentA;
