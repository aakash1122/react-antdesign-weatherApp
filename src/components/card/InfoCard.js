import React, { useContext } from "react";
import { Card } from "antd";

import { ThemeContext } from "../../context/ThemeContext";

const InfoCard = ({ data, title, unit, img, color }) => {
  const { themeObj } = useContext(ThemeContext);

  return (
    <div>
      <Card
        title={title}
        headStyle={{
          color: themeObj.fg,
          background: "transparent",
          border: "none"
        }}
        style={{
          border: "none",
          width: "100%",
          margin: "auto",
          padding: 0,
          background: themeObj.cb,
          color: themeObj.fg,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
        hoverable={true}
      >
        <h1 className="card-description" style={{ color: themeObj.fg }}>
          {data} <span id="unit">{unit}</span>
        </h1>
      </Card>
    </div>
  );
};

export default InfoCard;
