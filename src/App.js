import React, { useEffect, useState, useContext } from "react";
import { Tabs } from "antd";
import { Slider, Switch } from "antd";

import Cards from "./components/card/Cards";
import { getCurrentWeatherDataByGeo } from "./utils/accuWeather";
import Spinner from "./components/spinner/Spinner";
import { ThemeContext } from "./context/ThemeContext";

const { TabPane } = Tabs;

function App() {
  let [error, setError] = useState("");
  let [weather, setWeather] = useState(null);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const { dark, themeObj, toggleDarkMode } = useContext(ThemeContext);

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
      id="App-Wrapper"
      style={{
        background: themeObj.bg,
        color: themeObj.fg
      }}
    >
      <div className="App">
        <div>
          {/* <span>Enable Dark Mode</span> */}
          <Switch className="themeSlider" onChange={toggleDarkMode} />
        </div>
        {weather ? (
          <>
            <div className="current-container">
              <h5 className="current-title" style={{ color: themeObj.fg }}>
                Current Temperature
              </h5>
              <h1 className="current-temp" style={{ color: themeObj.fg }}>
                {weather.currently.temperature}
                <span style={{ padding: "5px", color: themeObj.fg }}>
                  &#8451;
                </span>
              </h1>
            </div>

            <div className="card-container">
              <Tabs
                type="card"
                animated={true}
                tabBarStyle={{
                  color: themeObj.fg,
                  background: themeObj.bg,
                  border: "none"
                }}
              >
                {weather.daily.data.map((day, idx) => {
                  let currentDay = new Date(day.time * 1000).getDay();
                  return (
                    <TabPane
                      tab={idx === 0 ? "Today" : days[currentDay]}
                      key={idx}
                      style={{ background: themeObj.bg }}
                    >
                      <Cards data={day} />
                    </TabPane>
                  );
                })}
              </Tabs>
            </div>
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

export default App;
