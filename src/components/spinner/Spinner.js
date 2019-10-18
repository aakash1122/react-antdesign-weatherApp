import React from "react";
import { css } from "@emotion/core";
// First way to import
// Another way to import. This is recommended to reduce bundle size
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const override = css`
  position: absolute;
  margin: 0 auto;
  border-color: red;
  height: 100px;
  width: 100px;
  left: 50%;
  margin-left: -50px;
  top: 50%;
  margin-top: -50px;
`;

const Spinner = () => {
  return (
    <div className="sweet-loading">
      <ClimbingBoxLoader
        css={override}
        sizeUnit={"px"}
        size={50}
        color={"#03A9F4"}
        loading={true}
      />
    </div>
  );
};

export default Spinner;
