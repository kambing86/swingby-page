import React from "react";
import styles from "./Community.module.scss";

export default () => (
  <div className={`${styles.background} text-secondary py-3`}>
    <div className={`${styles.header} my-5`}>
      <b>Join the</b>
      <br />
      Community
    </div>
    <div className="my-5 text-dark">
      Learn more about Maker, chat with the team, and have your say in shaping
      the future of commerce on the blockchain.
    </div>
    <a href="/#Chat">Chat »</a>
    <a href="/#Subreddit">Subreddit »</a>
    <a href="/#Events">Events »</a>
    <a href="https://medium.com/swingby-protocol/">Blog »</a>
    <div className="my-5">
      <a className="link-primary" href="/#Join">
        <div>Join the community</div>
      </a>
    </div>
  </div>
);
