import React, { useContext } from "react";

import ThemeMode from "../theme/ThemeMode";
import { ThemeContext } from "../../context/ThemeContext";

const CurrentWeather = ({ weather }) => {
  const { themeObj } = useContext(ThemeContext);

  return (
    <div className="current-container">
      <ThemeMode />
      <h5 className="current-title" style={{ color: themeObj.fg }}>
        Current Temperature
      </h5>
      <h1 className="current-temp" style={{ color: themeObj.fg }}>
        {weather.currently.temperature}
        <span style={{ padding: "5px", color: themeObj.fg }}>&#8451;</span>
      </h1>
    </div>
  );
};

export default CurrentWeather;
