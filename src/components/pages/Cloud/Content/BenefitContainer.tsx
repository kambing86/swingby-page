import React, { useEffect, ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";
import styles from "./BenefitContainer.module.scss";

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
    <animated.div
      className={`${styles["benefit-container"]} row`}
      style={springProps}
      ref={ref}
    >
      <div className="col-12 col-md-4">
        <img src={props.imageSrc} alt={props.imageAlt} />
      </div>
      <div className="col-12 col-md-8 text-left">
        <h3 className="text-center text-md-left">{props.title}</h3>
        <div>{props.description}</div>
      </div>
    </animated.div>
  );
};
