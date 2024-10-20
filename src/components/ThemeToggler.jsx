import React, { useContext, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { ThemeContext } from "../context/Context";

const ThemeToggler = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button onClick={handleTheme} className="theme-toggler">
      <div className="icons-holder">
        {theme === "dark" ? (
          <SunIcon className="sunIcon toggler-icons" />
        ) : (
          <MoonIcon className="moonIcon toggler-icons" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggler;
