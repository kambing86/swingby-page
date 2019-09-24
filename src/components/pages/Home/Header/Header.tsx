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
        <img src={`${PUBLIC_URL}/assets/home/LOGO.svg`} alt="LOGO" />
      </Link>
      <div className="top-menu d-none d-md-block">
        <Link to="/Product">PRODUCT</Link>
        <a href="https://medium.com/swingby-protocol/">BLOG</a>
        <a href="https://github.com/swingbyprotocol/">GITHUB</a>
        <a href="https://twitter.com/swingbyprotocol/">TWITTER</a>
      </div>
      <div className="container">
        <div
          className="text-left"
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
          className="text-left pt-5"
          style={{
            color: "white",
            width: "100%",
            fontSize: "1.1em",
          }}
        >
          Swingby Connect is a cross-chain
          <br />
          protocol that brings BTC to other
          <br />
          blockchains in a decentralized way.
        </div>
        <div className="text-left pt-4">
          <a
            href="https://twitter.com/swingbyprotocol/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={`${PUBLIC_URL}/assets/home/twitter.svg`} alt="twitter" />
          </a>
          <a
            href="https://medium.com/swingby-protocol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={`${PUBLIC_URL}/assets/home/medium.svg`} alt="medium" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${PUBLIC_URL}/assets/home/facebook.svg`}
              alt="facebook"
            />
          </a>
          <a
            href="https://reddit.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={`${PUBLIC_URL}/assets/home/reddit.svg`} alt="reddit" />
          </a>
        </div>
      </div>
    </div>
  );
};
