import React from "react";
import { useWindowScroll } from "react-use";
import "./Header.scss";

export default () => {
  const { y } = useWindowScroll();
  return (
    <div className="header">
      <div
        className="header-star"
        style={{ transform: `translate(0, ${0.2 * y}px)` }}
      />
      <div
        className="header-orbit"
        style={{ transform: `translate(0, ${0.3 * y}px)` }}
      />
      <div
        className="header-bg"
        style={{ transform: `translate(0, ${0.4 * y}px)` }}
      />
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
  );
};
