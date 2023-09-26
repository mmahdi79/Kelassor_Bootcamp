// import React from "react";
import "./PostLogo.css";

export const PostLogo = () => {
  return (
    <div className="post-logo">
      <img src="./public/images/post-logo.svg" alt="" />
      <div className="title">
        <p>Smith jems</p>
        <p>12h ago </p>
      </div>
      <span className="menu">
        <img src="./public/images/3dot-menu.svg" alt="" />
      </span>
    </div>
  );
};
