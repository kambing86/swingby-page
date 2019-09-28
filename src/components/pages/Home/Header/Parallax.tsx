import React from "react";
import { useWindowScroll, useWindowSize } from "react-use";

const { PUBLIC_URL } = process.env;

export default () => {
  const { width } = useWindowSize();
  const { y } = useWindowScroll();
  const startY = width >= 1200 ? 0 : width >= 576 ? 240 : 390;
  return (
    <>
      <div
        className="header-orbit"
        style={{
          backgroundImage: `url("${PUBLIC_URL}/assets/home/orbit.png")`,
          transform: `translate(0, ${startY + 0.3 * y}px)`,
        }}
      />
      <div
        className="header-bg"
        style={{
          backgroundImage: `url("${PUBLIC_URL}/assets/home/bg.svg")`,
          transform: `translate(0, ${startY + 0.4 * y}px)`,
        }}
      />
    </>
  );
};
