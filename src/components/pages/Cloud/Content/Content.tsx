import React from "react";
import BoxContainer from "./BoxContainer";
import styles from "./Content.module.scss";

const { PUBLIC_URL } = process.env;

export default () => {
  return (
    <div className="container">
      <div className={`${styles["offset-content"]} row`}>
        <div className="col-12 col-md-4">
          <BoxContainer
            imageSrc={`${PUBLIC_URL}/assets/cloud/SafePOS.png`}
            imageAlt="SafePOS"
            title="PROOF OF STAKE"
            description={
              'A "trusted environment" allows verification of PoS node to prevent 3rd party software'
            }
          />
        </div>
        <div className="col-12 col-md-4">
          <BoxContainer
            imageSrc={`${PUBLIC_URL}/assets/cloud/BridgingChains.png`}
            imageAlt="BridgingChains"
            title="BRIDGING CHAINS"
            description={
              'A "trusted environment" allows for validating transactions on multiple chains in a trustless matter.'
            }
          />
        </div>
        <div className="col-12 col-md-4">
          <BoxContainer
            imageSrc={`${PUBLIC_URL}/assets/cloud/Oracles.png`}
            imageAlt="Oracles"
            title="ORACLES"
            description={
              'A "trusted environment" can read events and transactions from any network and report them in a trustless matter.'
            }
          />
        </div>
      </div>
    </div>
  );
};
