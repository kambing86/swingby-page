import React, { useEffect, ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";

export default (props: {
  imageSrc: string;
  imageAlt: string;
  title: ReactNode;
  titleContent: ReactNode;
  link: string;
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
    <animated.div className="col-12 col-md-4" style={springProps}>
      <div className="services-bg p-3" ref={ref}>
        <div className="container">
          <div className="row p-3 my-3">
            <div className="col-12">
              <img src={props.imageSrc} alt={props.imageAlt} />
              <div className="my-2">{props.title}</div>
              <div className="content my-2 text-left">{props.titleContent}</div>
              <a
                className="link-secondary my-2"
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>Getting Started</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};
