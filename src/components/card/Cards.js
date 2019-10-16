import React from "react";
import { Row, Col, Card } from "antd";
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
            color="#03a9f4"
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
          {/* <InfoCard
            data={data.summary}
            title="Current Temperature"
            color="#03a9f4"
            unit="&#8451;"
          /> */}
        </Col>
        <Col span={7}>
          {" "}
          <InfoCard
            data={data.temperatureHigh}
            title="Maximum Temperature"
            color="#03a9f4"
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
            color="#607d8b"
          />
        </Col>
        <Col span={11}>
          <InfoCard
            data={new Date(data.sunsetTime * 1000).toLocaleTimeString()}
            title="Sunset"
            img={sunset}
            color="#607d8b"
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
          <InfoCard
            data={data.pressure}
            unit="mBar"
            title="Pressure"
            color="#ff5252"
          />
        </Col>
        <Col span={7}>
          <InfoCard
            data={data.humidity}
            unit="%"
            title="Humidity"
            color="#ff5252"
          />
        </Col>
        <Col span={7}>
          {" "}
          <InfoCard
            data={parseFloat(data.windSpeed * 3.6).toFixed(2)}
            title="Wind Speed"
            color="#ff5252"
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
