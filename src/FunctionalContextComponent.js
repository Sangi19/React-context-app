import React from "react";
import { useThemeConsumer } from "./ThemeContext";

export default function FunctionalContextComponent() {
  const {darkTheme, toggleTheme} = useThemeConsumer();

  const darkStyle = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: !darkTheme ? "#333" : "#ccc",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <div style={darkStyle}>
      <button onClick={toggleTheme}> Toggle Theme</button>
      <h1>FunctionalContextComponent</h1>
    </div>
  );
}

