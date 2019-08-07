import React, { useEffect, ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";
import styles from "./BoxContainer.module.scss";

export default (props: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: ReactNode;
}) => {
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
    <animated.div className={`${styles["box-container"]}`} style={springProps}>
      <div className={`${styles["box"]}`} ref={ref}>
        <img src={props.imageSrc} alt={props.imageAlt} />
        <h3>{props.title}</h3>
        <div>{props.description}</div>
      </div>
    </animated.div>
  );
};
