import React from "react";
import styles from "./Cloud.module.scss";
import Content from "./Content";
import Header from "./Header";

export default () => (
  <div className={styles["cloud"]}>
    <Header />
    <Content />
  </div>
);
