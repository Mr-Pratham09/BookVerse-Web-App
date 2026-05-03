import { useState, useEffect } from "react";
import darkPng from "../../assets/website/dark-mode-button.png";
import lightPng from "../../assets/website/light-mode-button.png";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme, element]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div
      onClick={toggleTheme}
      className="cursor-pointer text-xl transition-all duration-300"
    >
      {theme === "dark" ? (
        <FaSun className="text-yellow-400 hover:scale-110 transition" />
      ) : (
        <FaMoon className="text-gray-700 hover:scale-110 transition" />
      )}
    </div>
  );
};


export default DarkMode;