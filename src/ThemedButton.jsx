import React, { useContext } from "react";
import { ThemeContext, themes } from "./ThemeContext";

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={() => {
        setTheme((theme) =>
          theme === themes.dark ? themes.light : themes.dark
        );
      }}
      style={{ background: theme.background, color: theme.foreground }}
    >
      I am styled by theme context!
    </button>
  );
}

export default ThemedButton;
