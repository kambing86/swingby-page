import React from "react";
import { useWindowScroll } from "react-use";

const { PUBLIC_URL } = process.env;

export default () => {
  const { y } = useWindowScroll();
  return (
    <>
      <div
        className="header-star"
        style={{
          backgroundImage: `url("${PUBLIC_URL}/assets/HEADER02/star.png")`,
          transform: `translate(0, ${0.2 * y}px)`,
        }}
      />
      <div
        className="header-orbit"
        style={{
          backgroundImage: `url("${PUBLIC_URL}/assets/HEADER02/orbit.png")`,
          transform: `translate(0, ${0.3 * y}px)`,
        }}
      />
      <div
        className="header-bg"
        style={{
          backgroundImage: `url("${PUBLIC_URL}/assets/HEADER02/bg.svg")`,
          transform: `translate(0, ${0.4 * y}px)`,
        }}
      />
    </>
  );
};
