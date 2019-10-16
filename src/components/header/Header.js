import React from "react";
import { Alert } from "antd";

import styles from "./Header.module.css";

const Header = ({ today, weekly }) => {
  return (
    <div className={`${styles.header}`}>
      <Alert
        message="Today"
        description={today}
        type="info"
        banner={true}
        closable={true}
      />
      <Alert
        message="This Week"
        description={weekly}
        type="warning"
        banner={true}
        closable={true}
      />
    </div>
  );
};

export default Header;
