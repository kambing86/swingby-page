import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

export default () => (
  <div className={`${styles["background"]} text-primary py-3`}>
    <div className="container">
      <div className="my-3 d-md-none">
        <Link to="/Product">PRODUCT</Link>
        <a href="https://medium.com/swingby-protocol/">BLOG</a>
        <a href="https://github.com/swingbyprotocol/">GITHUB</a>
        <a href="https://twitter.com/swingbyprotocol/">TWITTER</a>
      </div>
      <div className="my-3">© 2018-2019 Swingby Labs. All Rights Reserved.</div>
    </div>
  </div>
);
