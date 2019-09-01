import React from "react";
import "./Whitepaper.scss";

export default () => (
  <div className="whitepaper text-secondary py-3">
    <div className="whitepaper-header my-5">
      <b>BTC token issuance</b>
      <br />
      powered by
      <b> Swingby Connect</b>
    </div>
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-8 py-2">
          <div className="py-2">
            <b>Swingby Connect</b> Whitepaper
          </div>
          <div className="text-dark">
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English
          </div>
        </div>
        <div className="col-12 col-md-4 py-2 align-middle-container">
          <div className="middle-section">
            <a
              className="link-primary"
              href="https://docs.swingby.network/WhitePaper_v1.3.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>Read the Whitepaper</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
