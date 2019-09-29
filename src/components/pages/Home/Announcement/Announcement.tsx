import React from "react";
import styles from "./Announcement.module.scss";

const { PUBLIC_URL } = process.env;

export default () => (
  <div
    className="text-primary"
    style={{ background: `url(${PUBLIC_URL}/assets/home/announcement-bg.jpg)` }}
  >
    <div className="container py-3">
      <div className="row">
        <div className={`${styles["header"]} my-5 col-12 font-weight-bold`}>
          Announcement
        </div>
        <div className={`${styles["title"]} my-5 col-12`}>
          Announcement Title Placeholder
        </div>
        <div className={`${styles["content"]} my-5 col-12`}>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </div>
      </div>
    </div>
  </div>
);
