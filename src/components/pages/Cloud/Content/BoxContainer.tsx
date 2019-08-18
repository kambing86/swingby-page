import AnimatedContainer from "components/common/AnimatedContainer";
import React, { ReactNode } from "react";
import styles from "./BoxContainer.module.scss";

export default (props: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: ReactNode;
}) => {
  return (
    <AnimatedContainer className={styles["box-container"]}>
      <img src={props.imageSrc} alt={props.imageAlt} />
      <h3>{props.title}</h3>
      <div>{props.description}</div>
    </AnimatedContainer>
  );
};
