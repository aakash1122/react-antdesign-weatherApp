import React, { useContext } from "react";
import { Tabs } from "antd";

import Cards from "../card/Cards";
import { ThemeContext } from "../../context/ThemeContext";

const { TabPane } = Tabs;

const WeatherForecast = ({ data }) => {
  const { themeObj } = useContext(ThemeContext);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return (
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
        {data.map((day, idx) => {
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
  );
};

export default WeatherForecast;
