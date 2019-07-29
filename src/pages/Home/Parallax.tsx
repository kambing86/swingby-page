import React from "react";
import { useWindowScroll } from "react-use";

export default () => {
  const { y } = useWindowScroll();
  return (
    <>
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
    </>
  );
};
