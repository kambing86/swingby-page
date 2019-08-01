import React, { useEffect, ReactNode } from "react";
import { animated, useSpring } from "react-spring";
import useIsInViewport from "use-is-in-viewport";

export default (props: {
  imageSrc: string;
  imageAlt: string;
  title: ReactNode;
  titleContent: ReactNode;
  description: ReactNode;
}) => {
  const [isInViewport, childElToWatch] = useIsInViewport({
    threshold: 50,
  });
  const [springProps, set] = useSpring(() => ({
    transform: "translate(0, -50px)",
    opacity: 0,
  }));
  useEffect(() => {
    if (isInViewport) {
      set({ transform: "translate(0, 0)", opacity: 1 });
    }
  }, [isInViewport, set]);
  return (
    <animated.div style={springProps}>
      <div className="services-bg p-3" ref={childElToWatch}>
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
