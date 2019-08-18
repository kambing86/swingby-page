import React from "react";
import styles from "./Cloud.module.scss";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

export default () => (
  <div className={styles["cloud"]}>
    <Header />
    <Content />
    <Footer />
  </div>
);
