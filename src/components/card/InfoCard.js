import React from "react";
import { Card } from "antd";

const InfoCard = ({ data, title, unit, img, color }) => {
  return (
    <div>
      <Card
        title={title}
        bordered={true}
        style={{
          width: "100%",
          margin: "auto",
          padding: 0,
          background: color
        }}
        hoverable={true}
        bodyStyle={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          boxShadow: "10px 10px 15px 1px rgba(189,183,189,0.75)"
        }}
      >
        <h1
          style={{
            fontSize: 35,
            textAlign: "center",
            color: "#fff",
            fontWeight: "bolder"
          }}
        >
          {data} <span id="unit">{unit}</span>
        </h1>
      </Card>
    </div>
  );
};

export default InfoCard;
