import React, { useContext } from "react";
import { Switch } from "antd";

import { ThemeContext } from "../../context/ThemeContext";

const ThemeMode = () => {
  const { toggleDarkMode, themeObj } = useContext(ThemeContext);

  return (
    <div className="theme-mode-container">
      <h3 style={{ margin: "0 4px", fontWeight: "600", color: themeObj.fg }}>
        Dark Mode
      </h3>
      <Switch className="themeSlider" onChange={toggleDarkMode} />
    </div>
  );
};

export default ThemeMode;
