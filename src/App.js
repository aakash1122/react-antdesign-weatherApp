import React, { useEffect, useState, useContext } from "react";

import CurrentWeather from "./components/current-weather/CurrentWeather";
import { getCurrentWeatherDataByGeo } from "./utils/accuWeather";
import Spinner from "./components/spinner/Spinner";
import { ThemeContext } from "./context/ThemeContext";
import WeatherForecast from "./components/weather-forecast/WeatherForecast";
import Axios from "axios";

function App() {
  const [weather, setWeather] = useState(null);
  const { themeObj } = useContext(ThemeContext);

  useEffect(() => {
    (async function run() {
      const location = await getLoc();
      getweatherData(location);
    })();
  }, []);

  const getweatherData = async (position) => {
    const data = await getCurrentWeatherDataByGeo(position);
    setWeather(data);
  };

  const getLoc = async () => {
    const res = await Axios.get(
      "https://location.services.mozilla.com/v1/geolocate?key=test"
    );
    return res.data.location;
  };

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
