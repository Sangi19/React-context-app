import "./App.css";
import React, { useState } from "react";
import FunctionalContextComponent from "./FunctionalContextComponent";

export const ThemeContext = React.createContext();

function App() {
 const [darkTheme, setDarkTheme]=useState(true)

  const toggleTheme = () => {
    setDarkTheme(prevDarkTheme=> !prevDarkTheme)
    console.log(darkTheme);
  };

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}> Toggle Theme</button>
        <FunctionalContextComponent />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
