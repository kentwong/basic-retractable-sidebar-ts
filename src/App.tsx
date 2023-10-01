import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/shared/Sidebar/Sidebar";
import MainArea from "./components/shared/MainArea/MainArea";

function App() {
  const [activeForm, setActiveForm] = useState<"A" | "B">("A"); // Specify the type for activeForm

  const handleFormSwitch = (form: "A" | "B") => { // Specify the argument type
    setActiveForm(form);
  };

  const [expanded, setExpanded] = useState<boolean>(true); // Specify the type for expanded

  const handleToggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="App" data-testid="app">
      <div className={`container ${expanded ? "expanded" : ""}`}>
        <Sidebar
          activeForm={activeForm}
          onFormSwitch={handleFormSwitch}
          expanded={expanded}
          onToggleSidebar={handleToggleSidebar}
        />
        <MainArea activeForm={activeForm} expanded={expanded}/>
      </div>
    </div>
  );
}

export default App;
