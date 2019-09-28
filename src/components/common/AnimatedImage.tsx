import classNames from "classnames";
import React, { CSSProperties } from "react";
import { animated, useSpring } from "react-spring";
import "./AnimatedImage.scss";

export default React.memo(
  ({
    className,
    style,
    src,
    alt,
    sprintProps,
  }: {
    className?: string;
    style?: CSSProperties;
    src: string;
    alt: string;
    sprintProps: any;
  }) => {
    const props = useSpring(sprintProps);
    return (
      <animated.div
        className={classNames("animated-image", className)}
        style={{
          ...style,
          ...props,
        }}
      >
        <img src={src} alt={alt} />
      </animated.div>
    );
  }
);
