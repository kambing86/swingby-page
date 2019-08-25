import AnimatedContainer from "components/common/AnimatedContainer";
import React from "react";
import BenefitContainer from "./BenefitContainer";
import BoxContainer from "./BoxContainer";
import styles from "./Content.module.scss";
import ProfitContainer from "./ProfitContainer";

const { PUBLIC_URL } = process.env;

export default () => {
  return (
    <div className={`${styles["container"]} container`}>
      <div className={`${styles["big-content"]} row`}>
        <AnimatedContainer className="col-12 mt-5">
          <hr />
          <h2>What is Swingby Trusted Cloud?</h2>
          <p className="mt-4">
            A trusted execution environment ensuring immutability of deployed
            application containers. Secured through a hash logger which logs the
            hash of the application containers with each execution. A Swingby
            node has no external network access and can only be interacted with
            through blockchain events.
          </p>
        </AnimatedContainer>
      </div>
      <div className={`${styles["box-content"]} row mt-3`}>
        <AnimatedContainer className="col-12 text-center">
          <hr />
          See what's possible with
          <br />
          Swingby Cloud
        </AnimatedContainer>
        <div className="col-12 col-md-4">
          <BoxContainer
            imageSrc={`${PUBLIC_URL}/assets/cloud/SafePOS.svg`}
            imageAlt="SafePOS"
            title="PROOF OF STAKE"
            description={
              'A "trusted environment" allows verification of PoS node to prevent 3rd party software'
            }
          />
        </div>
        <div className="col-12 col-md-4">
          <BoxContainer
            imageSrc={`${PUBLIC_URL}/assets/cloud/BridgingChains.svg`}
            imageAlt="BridgingChains"
            title="BRIDGING CHAINS"
            description={
              'A "trusted environment" allows for validating transactions on multiple chains in a trustless matter.'
            }
          />
        </div>
        <div className="col-12 col-md-4">
          <BoxContainer
            imageSrc={`${PUBLIC_URL}/assets/cloud/Oracles.svg`}
            imageAlt="Oracles"
            title="ORACLES"
            description={
              'A "trusted environment" can read events and transactions from any network and report them in a trustless matter.'
            }
          />
        </div>
      </div>
      <div className={`${styles["small-content"]} row`}>
        <div className="col-12 mt-5">
          <AnimatedContainer>
            <hr />
            <h2>Profitabilty</h2>
          </AnimatedContainer>
          <ProfitContainer
            imageSrc={`${PUBLIC_URL}/assets/cloud/ApplicationDeployment.svg`}
            imageAlt="ApplicationDeployment"
            title="APPLICATION DEPLOYMENT"
            description={
              <p>
                Deployment of application containers onto our dedicated nodes
                are through our Ethereum smart contract. An Ethereum deploy
                event retrieves the docker image of an application container and
                installs it onto the node.
              </p>
            }
          />

          <ProfitContainer
            imageSrc={`${PUBLIC_URL}/assets/cloud/Benefits.svg`}
            imageAlt="Benefits"
            title="BENEFITS"
            description={
              <p>
                Client application containers can be deployed and run onto our
                trusted nodes. Since the nodes cannot be accessed and the
                application cannot be jeopardized, the client application can
                execute tasks in a trustless matter.
              </p>
            }
          />
          <ProfitContainer
            imageSrc={`${PUBLIC_URL}/assets/cloud/Cashpoint.svg`}
            imageAlt="Cashpoint"
            title="CASHPOINT"
            description={
              <p>
                Deploying application containers has a fixed pricing paid with
                ERC-20 Swingby Staking Tokens (SST). Usage of the Swingby
                Trusted Cloud & its nodes has a fixed pricing pre-paid every 6
                months. The node network is managed on a PoA network that uses
                Swingby Staking Tokens (SST) for governance.
              </p>
            }
          />
        </div>
      </div>
      <div className={`${styles["big-content"]} row`}>
        <AnimatedContainer className="col-12 mt-5">
          <hr />
          <h2>What is Bitcoin Tokens (BTCT)</h2>
          <img
            src={`${PUBLIC_URL}/assets/cloud/Bitcoin-to-ETH.svg`}
            alt="Bitcoin-to-ETH"
            className="my-4"
            style={{ width: "9rem" }}
          />
          <p className="mt-4">
            The Bitcoin Token (BTCT) is an ERC-20 token on the Ethereum network
            which has its value pegged to Bitcoin. BTCT is powered by the
            Swingby Protocol which aims to bring the value and liquidity of
            other blockchains to the Ethereum Network. Swingby Protocol is
            powered by the Swingby Trusted Cloud.
          </p>
        </AnimatedContainer>
      </div>
      <div className={`${styles["small-content"]} row`}>
        <AnimatedContainer className="col-12">
          <hr />
          <h2>Bitcoin Token Benefits</h2>
        </AnimatedContainer>
        <div className="col-12 col-md-6">
          <BenefitContainer
            imageSrc={`${PUBLIC_URL}/assets/cloud/DEX.svg`}
            imageAlt="DEX"
            title="DEX"
            description={
              <p>
                Enabling BTC trading via DEXes on Ethereum (e.g.0x protocol)
                will lead to increased liquidity at the exchanges.
              </p>
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <BenefitContainer
            imageSrc={`${PUBLIC_URL}/assets/cloud/Lending.svg`}
            imageAlt="Lending"
            title="LENDING"
            description={
              <p>
                BTC tokens can be used in decentralized lending protocols (e.g.
                Dharma) enhancing the possibilities of BTC.
              </p>
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <BenefitContainer
            imageSrc={`${PUBLIC_URL}/assets/cloud/Derivatives.svg`}
            imageAlt="Derivatives"
            title="DERIVATIVES"
            description={
              <p>
                Financial derivatives protocols (e.g. dYdX protocol) with short
                sell and options functions can use BTC tokens.
              </p>
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <BenefitContainer
            imageSrc={`${PUBLIC_URL}/assets/cloud/Payment.svg`}
            imageAlt="Payment"
            title="PAYMENT"
            description={
              <p>
                BTC tokens can be held in Ethereum wallets and used for payment
                or throughout Ethereum Dapps.
              </p>
            }
          />
        </div>
        <div className="col-12">
          <div>
            <a href="https://twitter.com/swingbyprotocol/">
              Go to Swingby Protocol
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
