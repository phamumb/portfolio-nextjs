"use client";

import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = (checked) => {
    var htmlTag = document.getElementsByTagName("html")[0];
    if (htmlTag.classList && htmlTag.classList.contains("dark")) {
      htmlTag.classList.remove("dark");
    } else {
      htmlTag.classList.add("dark");
    }
    setIsDarkMode(checked);
  };
  return (
    <DarkModeSwitch
      style={{
        marginTop: "1rem",
        alignSelf: "end"
      }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={20}
    />
  );
};

export default DarkModeToggle;
