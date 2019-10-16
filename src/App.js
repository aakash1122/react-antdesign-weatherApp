import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "antd";
import { Tabs } from "antd";

import Header from "./components/header/Header";
import Cards from "./components/card/Cards";
import { getCurrentWeatherDataByGeo } from "./utils/accuWeather";
import InfoCard from "./components/card/InfoCard";
import Spinner from "./components/spinner/Spinner";

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

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        getCurrentWeatherDataByGeo(pos.coords.latitude, pos.coords.longitude)
          .then(data => {
            setWeather(data.data);
          })
          .catch(error => {
            setError(error);
            console.log(error);
          });
      });
    } else {
      setError("Please Allow the location service first");
    }
  }, []);

  return (
    <div className="App">
      {weather ? (
        <>
          <div className="current-container">
            <h5 className="current-title">Current Temperature</h5>
            <h1 className="current-temp">
              {weather.currently.temperature}
              <span style={{ padding: "5px", color: "darksalmon" }}>
                &#8451;
              </span>
            </h1>
          </div>

          <div className="card-container">
            <Tabs type="card">
              {weather.daily.data.map((day, idx) => {
                let currentDay = new Date(day.time * 1000).getDay();
                return (
                  <TabPane
                    tab={idx === 0 ? "Today" : days[currentDay]}
                    key={idx}
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
  );
}

export default App;
