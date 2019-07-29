import React from "react";
import { Link } from "react-router-dom";
import Animation from "./Animation";
import "./Header.scss";
import Parallax from "./Parallax";

export default () => {
  return (
    <div className="header">
      <Parallax />
      <Animation />
      <a className="header-logo" href="/">
        <img src="/assets/HEADER02/LOGO.png" alt="LOGO" />
      </a>
      <div className="top-menu d-none d-md-block">
        <a href="#/Product">PRODUCT</a>
        <Link to="https://medium.com/swingby-protocol/">BLOG</Link>
        <Link to="https://github.com/swingbyprotocol/">GITHUB</Link>
        <Link to="https://twitter.com/swingbyprotocol/">TWITTER</Link>
      </div>
      <div
        style={{
          color: "white",
          position: "absolute",
          top: 167,
          width: "100%",
          fontSize: 50,
        }}
      >
        Creating <strong>decentralized BTC</strong>
        <br />
        on all the <strong>blockchains</strong>
      </div>
      <div
        style={{
          color: "white",
          position: "absolute",
          top: 326,
          width: "100%",
          fontSize: 24,
        }}
      >
        Swingby Connect is a cross-chain protocol that brings BTC
        <br />
        to other blockchains in a decentralized way.
      </div>
    </div>
  );
};
