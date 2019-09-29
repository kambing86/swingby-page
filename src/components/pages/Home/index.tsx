import React from "react";
import Announcement from "./Announcement";
import Community from "./Community";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./Home.module.scss";
import Partners from "./Partners";
import Services from "./Services";
import Whitepaper from "./Whitepaper";

export default () => (
  <div className={styles["home"]}>
    <Header />
    <Announcement />
    <Services />
    <Whitepaper />
    <Partners />
    <Community />
    <Footer />
  </div>
);
