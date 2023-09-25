// import React from "react";
import "./Buttons.css";

export const Buttons = () => {
  return (
    <div className="buttons">
      <span>
        <img src="./public/images/gallery.svg" alt="" />
        <img src="./public/images/music-player.svg" alt="" />
        <img src="./public/images/calender.svg" alt="" />
      </span>
      <a href="#">
        <button>Create a post</button>
      </a>
    </div>
  );
};
