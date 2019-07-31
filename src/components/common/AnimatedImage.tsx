import classNames from "classnames";
import React from "react";
import { animated } from "react-spring";
import "./AnimatedImage.scss";

export default React.memo(
  ({
    className,
    top,
    left,
    src,
    alt,
    sprintProps,
  }: {
    className?: string;
    top: number;
    left: number;
    src: string;
    alt: string;
    sprintProps: any;
  }) => {
    return (
      <animated.div
        className={classNames("animated-image", className)}
        style={{
          top,
          left,
          ...sprintProps,
        }}
      >
        <img src={src} alt={alt} />
      </animated.div>
    );
  }
);
