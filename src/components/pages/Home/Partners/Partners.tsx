import React from "react";
import styles from "./Partners.module.scss";

const { PUBLIC_URL } = process.env;

export default () => (
  <div
    className="text-primary"
    style={{ background: `url(${PUBLIC_URL}/assets/home/announcement-bg.jpg)` }}
  >
    <div className="container py-3">
      <div className="row">
        <div className={`${styles["header"]} my-5 col-12 font-weight-bold`}>
          SWAP Partners
        </div>
        <div className="px-3 col-12 col-md-4">
          <div className={`${styles["title"]} container`}>BINANCE</div>
        </div>
        <div className="px-3 col-12 col-md-4">
          <div className={`${styles["title"]} container`}>BINANCE</div>
        </div>
        <div className="px-3 col-12 col-md-4">
          <div className={`${styles["title"]} container`}>BINANCE</div>
        </div>
      </div>
    </div>
  </div>
);
