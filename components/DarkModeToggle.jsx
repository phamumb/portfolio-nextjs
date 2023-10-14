"use client";

import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = (checked) => {
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
    setIsDarkMode(checked);
  };
  return (
    <DarkModeSwitch
      style={{
        marginBottom: "2rem",
        position: "fixed",
        bottom: "1rem",
        right: "2rem",
      }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={20}
    />
  );
};

export default DarkModeToggle;
