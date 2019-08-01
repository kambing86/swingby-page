import React, { ReactNode } from "react";

export default (props: {
  imageSrc: string;
  imageAlt: string;
  title: ReactNode;
  titleContent: ReactNode;
  description: ReactNode;
}) => (
  <div className="services-bg p-3">
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
);
