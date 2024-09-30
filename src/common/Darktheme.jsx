import React, { useEffect, useState } from "react";
import light from "../assets/light-button.jpg";
import dark from "../assets/240_F_967417069_3zmcLqX3crSkA40BubPQz1lkzWyRVuwF.jpg";

const Darktheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    // Update the localStorage when theme changes
    localStorage.setItem("theme", theme);

    // Toggle the dark mode class
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
      {/* Light Theme Button */}
      <img
        src={light}
        alt="Light Theme"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`w-12 rounded-full absolute ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } transition-all duration-1000`}
      />

      {/* Dark Theme Button */}
      <img
        src={dark}
        alt="Dark Theme"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`w-12 rounded-full ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        } transition-all duration-1000`}
      />
    </div>
  );
};

export default Darktheme;

