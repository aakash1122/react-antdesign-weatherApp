import React from "react";
import { Row, Col } from "antd";
import { Alert } from "antd";

import sunrise from "../../img/sunrise.jpg";
import sunset from "../../img/sunset.jpg";
import InfoCard from "./InfoCard";

const Cards = ({ data }) => {
  return (
    <div id="cards">
      <Row type="flex" justify="space-between">
        <Col span={7}>
          {" "}
          <InfoCard
            data={data.temperatureLow}
            title="Minimum Temperature"
            unit="&#8451;"
          />
        </Col>
        <Col span={7}>
          <Alert
            message="Summary"
            description={data.summary}
            type="info"
            showIcon
          />
        </Col>
        <Col span={7}>
          {" "}
          <InfoCard
            data={data.temperatureHigh}
            title="Maximum Temperature"
            unit="&#8451;"
          />
        </Col>
      </Row>

      <Row
        type="flex"
        justify="space-between"
        style={{ marginTop: 35, marginBottom: 35 }}
      >
        <Col span={11}>
          <InfoCard
            data={new Date(data.sunriseTime * 1000).toLocaleTimeString()}
            title="Sunrise"
            img={sunrise}
          />
        </Col>
        <Col span={11}>
          <InfoCard
            data={new Date(data.sunsetTime * 1000).toLocaleTimeString()}
            title="Sunset"
            img={sunset}
          />
        </Col>
      </Row>

      <Row
        type="flex"
        justify="space-between"
        style={{ marginTop: 15, marginBottom: 15 }}
      >
        <Col span={7}>
          {" "}
          <InfoCard data={data.pressure} unit="mBar" title="Pressure" />
        </Col>
        <Col span={7}>
          <InfoCard data={data.humidity} unit="%" title="Humidity" />
        </Col>
        <Col span={7}>
          {" "}
          <InfoCard
            data={parseFloat(data.windSpeed * 3.6).toFixed(2)}
            title="Wind Speed"
            unit="km/h"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Cards;

//3
// VM1248:1 4
// VM1248:1 5
// VM1248:1 6
// VM1248:1 0 sun
// VM1248:1 1
// VM1248:1 2
// VM1248:1 3
