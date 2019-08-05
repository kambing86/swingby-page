import React from "react";
import { Link } from "react-router-dom";
import Animation from "./Animation";
import "./Header.scss";
import Parallax from "./Parallax";

const { PUBLIC_URL } = process.env;

export default () => {
  return (
    <div className="header">
      <Parallax />
      <Animation />
      <Link className="header-logo" to="/">
        <img src={`${PUBLIC_URL}/assets/header/LOGO.png`} alt="LOGO" />
      </Link>
      <div className="top-menu d-none d-md-block">
        <Link to="/Product">PRODUCT</Link>
        <a href="https://medium.com/swingby-protocol/">BLOG</a>
        <a href="https://github.com/swingbyprotocol/">GITHUB</a>
        <a href="https://twitter.com/swingbyprotocol/">TWITTER</a>
      </div>
      <div className="container">
        <div
          style={{
            color: "white",
            paddingTop: 167,
            width: "100%",
            fontSize: "2.2em",
          }}
        >
          Creating <b>decentralized BTC</b>
          <br />
          on all the <b>blockchains</b>
        </div>
        <div
          style={{
            color: "white",
            width: "100%",
            fontSize: "1.1em",
          }}
        >
          Swingby Connect is a cross-chain protocol that brings BTC
          <br />
          to other blockchains in a decentralized way.
        </div>
      </div>
    </div>
  );
};
