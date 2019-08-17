import React from "react";
import Community from "./Community";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./Home.module.scss";
import Services from "./Services";
import Whitepaper from "./Whitepaper";

export default () => (
  <div className={styles["home"]}>
    <Header />
    <Whitepaper />
    <Services />
    <Community />
    <Footer />
  </div>
);
