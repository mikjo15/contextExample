import "./App.css";
import React, { useState } from "react";
import ToolBar from "./ToolBar";
import { ThemeContext, themes } from "./ThemeContext";

function App() {
  const [theme, setTheme] = useState(themes.dark);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ToolBar />;
    </ThemeContext.Provider>
  );
}

export default App;
