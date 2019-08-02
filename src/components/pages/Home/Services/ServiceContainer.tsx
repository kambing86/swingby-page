import React, { useEffect, ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";

export default (props: {
  imageSrc: string;
  imageAlt: string;
  title: ReactNode;
  titleContent: ReactNode;
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
    <animated.div style={springProps}>
      <div className="services-bg p-3" ref={ref}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 px-3 my-3 my-md-4">
              <img src={props.imageSrc} alt={props.imageAlt} />
              <div className="mt-2">{props.title}</div>
              <div className="content mt-2">{props.titleContent}</div>
            </div>
            <div className="col-12 col-md-6 px-3 my-3 my-md-4 text-center text-md-left">
              {props.description}
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};
