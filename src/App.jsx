import { createContext, useState } from "react";
import { About, Contacts, Footer, Home, Navbar, Projects } from "./components";

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme} className="app">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
