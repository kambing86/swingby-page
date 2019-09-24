import classNames from "classnames";
import React from "react";
import { animated, useSpring } from "react-spring";
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
    const props = useSpring(sprintProps);
    return (
      <animated.div
        className={classNames("animated-image", className)}
        style={{
          top,
          left,
          ...props,
        }}
      >
        <img src={src} alt={alt} />
      </animated.div>
    );
  }
);
