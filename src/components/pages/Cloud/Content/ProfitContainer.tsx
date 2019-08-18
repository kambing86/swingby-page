import AnimatedContainer from "components/common/AnimatedContainer";
import React, { ReactNode } from "react";
import styles from "./ProfitContainer.module.scss";

export default (props: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: ReactNode;
}) => {
  return (
    <AnimatedContainer
      className={`${styles["profit-container"]} row align-items-center`}
    >
      <div className="col-12 col-md-4">
        <img src={props.imageSrc} alt={props.imageAlt} />
      </div>
      <div className="col-12 col-md-8 text-left">
        <h3 className="text-center text-md-left">{props.title}</h3>
        <div>{props.description}</div>
      </div>
    </AnimatedContainer>
  );
};
