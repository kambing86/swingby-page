import React from "react";
import styles from "./Footer.module.scss";

const { PUBLIC_URL } = process.env;

export default () => {
  return (
    <div className={`${styles["footer"]} text-primary`}>
      <div
        className={`${styles["footer-bg"]}`}
        style={{
          background: `url(${PUBLIC_URL}/assets/cloud/footer-bg.png) no-repeat`,
        }}
      >
        <div className="container pt-5 pb-2">
          <hr />
          <h2>Ultimate Goal</h2>
          <p className="my-5">
            Providing a trusted environment where nodes can run as independent
            stakeholders which cannot be influenced by external factors (3rd
            party software) will bring forth countless new opportunities.
          </p>
          <div className={`${styles["footer-link"]} row`}>
            <div className="d-none d-md-block col-md-4 text-left">
              SWINGBY TRUSTED CLOUD
            </div>
            <div className="col-12 col-md-4">
              <a href="https://twitter.com/swingbyprotocol/">Contact Us</a>
            </div>
            <div className="col-12 col-md-4 text-center text-md-right">
              © 2019 All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
