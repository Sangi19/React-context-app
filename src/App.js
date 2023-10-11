import React, { useState } from "react";
import FunctionalContextComponent from "./FunctionalContextComponent";
import { ThemeProvider } from "./ThemeContext";


export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme () {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
    console.log(darkTheme)
  };

  return (
    <>
      <ThemeProvider.Provider value={{darkTheme, toggleTheme}}>
        <button onClick={toggleTheme}> Toggle Theme</button>
        <FunctionalContextComponent />
      </ThemeProvider.Provider>
    </>
  );
}

