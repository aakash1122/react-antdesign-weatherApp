import React, { useEffect, useState, useContext } from "react";

import CurrentWeather from "./components/current-weather/CurrentWeather";
import { getCurrentWeatherDataByGeo } from "./utils/accuWeather";
import Spinner from "./components/spinner/Spinner";
import { ThemeContext } from "./context/ThemeContext";
import WeatherForecast from "./components/weather-forecast/WeatherForecast";

function App() {
  let [error, setError] = useState("");
  let [weather, setWeather] = useState(null);

  const { themeObj } = useContext(ThemeContext);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        getCurrentWeatherDataByGeo(pos.coords.latitude, pos.coords.longitude)
          .then(data => {
            setWeather(data.data);
          })
          .catch(error => {
            setError(error);
            console.error(error);
          });
      });
    } else {
      setError("Please Allow the location service first");
    }
  }, []);

  return (
    <div
      className="App-Wrapper"
      style={{ background: themeObj.bg, color: themeObj.fg }}
    >
      {weather ? (
        <div className="App">
          <CurrentWeather weather={weather} />
          <WeatherForecast data={weather.daily.data} />
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default App;
