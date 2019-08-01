import React from "react";
import "./Services.scss";
import ServiceContainer from "./ServiceContainer";

const { PUBLIC_URL } = process.env;

export default () => (
  <div className="services text-primary py-3">
    <div className="services-header my-5">
      <b>Swingby </b>
      Services
    </div>
    <ServiceContainer
      imageSrc={`${PUBLIC_URL}/assets/services/swingby_trusted_cloud.png`}
      imageAlt="swingby_trusted_cloud"
      title={
        <>
          <b>Swingby </b>Trusted Cloud
        </>
      }
      titleContent="Swingby Trusted Cloud is a trusted execution environment which can
      host all kind of applications in a trustless way"
      description={
        <>
          <b>See what's possible</b>
          <div className="content mt-2">
            Proof of Stakes
            <br />
            Bridging Chains
            <br />
            Oracles
          </div>
          <br />
          <br />
          <br />
          <a className="link-secondary" href="#/">
            <div className="px-5">Get Started</div>
          </a>
        </>
      }
    />
    <ServiceContainer
      imageSrc={`${PUBLIC_URL}/assets/services/swingby_swap.png`}
      imageAlt="swingby_swap"
      title={
        <>
          <b>Swingby </b>Swap
        </>
      }
      titleContent="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      description={
        <>
          <b>How it works?</b>
          <div className="content mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in
          </div>
          <br />
          <a className="link-secondary" href="#/">
            <div className="px-5">Get Started</div>
          </a>
        </>
      }
    />
  </div>
);
