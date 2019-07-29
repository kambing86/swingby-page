import React from "react";
import { animated } from "react-spring";
import useSprintRepeat, { slowConfig } from "../../hooks/useSprintRepeat";
import "./Coin.scss";

export default ({
  top,
  left,
  src,
  alt,
}: {
  top: number;
  left: number;
  src: string;
  alt: string;
}) => {
  const props = useSprintRepeat({
    from: { transform: "translate(-50%, -50%) rotate(0deg)" },
    to: { transform: "translate(-50%, -50%) rotate(360deg)" },
    config: slowConfig,
  });
  return (
    <animated.div
      className="rotating-coin"
      style={{
        top,
        left,
        ...props,
      }}
    >
      <img src={src} alt={alt} />
    </animated.div>
  );
};
