import React from "react";
import "./Services.scss";
import ServiceContainer from "./ServiceContainer";

const { PUBLIC_URL } = process.env;

export default () => (
  <div className="services text-primary py-3">
    <div className="container">
      <div className="row">
        <div className="col-12 services-header my-5">
          <b>Swingby </b>
          Services
        </div>
        <ServiceContainer
          imageSrc={`${PUBLIC_URL}/assets/services/swingby-network.svg`}
          imageAlt="swingby_network"
          title={
            <>
              <b>Swingby </b>Network
            </>
          }
          titleContent={
            <>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </div>
              <div>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </div>
            </>
          }
          link="#"
        />
        <ServiceContainer
          imageSrc={`${PUBLIC_URL}/assets/services/swingby-trusted-cloud.svg`}
          imageAlt="swingby_swap"
          title={
            <>
              <b>Swingby </b>Trusted Cloud
            </>
          }
          titleContent={
            <>
              <div>
                Swingby Trusted Cloud is a trusted execution enviroment which
                can host all kind of applications in a trustless way.
              </div>
              <ul>
                <li>Proof of Stakes</li>
                <li>Bridging Chains</li>
                <li>Oracles</li>
              </ul>
            </>
          }
          link="#"
        />
        <ServiceContainer
          imageSrc={`${PUBLIC_URL}/assets/services/swingby-swap.svg`}
          imageAlt="swingby_swap"
          title={
            <>
              <b>Swingby </b>Swap
            </>
          }
          titleContent={
            <>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </div>
              <div>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </div>
            </>
          }
          link="#"
        />
      </div>
    </div>
  </div>
);
