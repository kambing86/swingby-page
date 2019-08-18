import classNames from "classnames";
import React, { useEffect, ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";

export default (props: { children: ReactNode; className?: string }) => {
  const [ref, isInView] = useInView({
    threshold: 0.5,
  });
  const [springProps, set] = useSpring(() => ({
    transform: "translate(0, -50px)",
    opacity: 0,
  }));
  useEffect(() => {
    if (isInView) {
      set({ transform: "translate(0, 0)", opacity: 1 });
    }
  }, [isInView, set]);
  return (
    <animated.div
      className={classNames(props.className)}
      style={springProps}
      ref={ref}
    >
      {props.children}
    </animated.div>
  );
};
