import React, { useContext, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { ThemeContext } from "../context/Context";

const ThemeToggler = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleTheme = () => {
    const Theme = theme === "light" ? "dark" : "light";
    setTheme(Theme);
    localStorage.setItem("theme", Theme);
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      onClick={handleTheme}
      className="theme-toggler"
      aria-label="Toggle Theme"
    >
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
