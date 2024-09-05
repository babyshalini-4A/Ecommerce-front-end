import React from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  
  const element = document.documentElement;

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.remove("light");
    } else {
      element.classList.add("light");
      element.classList.remove("dark");
    }
  }, [theme, element]);

  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={LightButton}
        alt="Switch to light mode"
        className={`w-12 cursor-pointer absolute right-0 z-10 transition-all duration-300 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
      />

      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={DarkButton}
        alt="Switch to dark mode"
        className={`w-12 cursor-pointer transition-all duration-300 ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
};

export default DarkMode;
