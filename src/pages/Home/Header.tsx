import React from "react";
import "./Header.scss";

export default () => (
  <div className="header">
    <div className="header-star">
      <div className="header-orbit">
        <a className="header-logo" href="/">
          <img src="/assets/HEADER02/LOGO.png" alt="LOGO" />
        </a>
        <div className="top-menu d-none d-md-block">
          <a href="/Product">PRODUCT</a>
          <a href="https://medium.com/swingby-protocol/">BLOG</a>
          <a href="https://github.com/swingbyprotocol/">GITHUB</a>
          <a href="https://twitter.com/swingbyprotocol/">TWITTER</a>
        </div>
      </div>
    </div>
  </div>
);
