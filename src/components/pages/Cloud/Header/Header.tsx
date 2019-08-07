import React from "react";
import styles from "./Header.module.scss";

const { PUBLIC_URL } = process.env;

export default () => {
  return (
    <div className={`${styles.header} text-primary`}>
      <div
        style={{
          background: `url(${PUBLIC_URL}/assets/cloud/bg-pattern.png) -50% -50% repeat`,
        }}
      >
        <div className={`${styles["top-menu"]}`}>
          <a href="https://twitter.com/swingbyprotocol/">Contact Us</a>
        </div>
        <div className="container">
          <div className={`${styles["row-1"]} row`}>
            <div className="col-9 col-md-6">
              <img
                src={`${PUBLIC_URL}/assets/cloud/cloud-logo.svg`}
                alt="cloud-logo"
              />
              <br />
              <br />
              <h1>
                SWINGBY
                <br />
                TRUSTED CLOUD
              </h1>
              <div>Physically trust, highly secure accessibility</div>
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={`${styles["row-2"]} row`}>
            <div className="col-12 text-center">
              See what's possible with
              <br />
              Swingby Cloud
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
