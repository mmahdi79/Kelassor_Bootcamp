// eslint-disable-next-line no-unused-vars
import React from "react";
import "./SoundRow.css";

function SoundRow() {
  return (
    <div className="sound-row">
      <img src="./public/images/player.svg" alt="player" />
      <ul>
        <li>Sound name</li>
        <li>0:12</li>
      </ul>
      <div className="desktop">
        <p>Confused excited crowd slight panic and distress</p>
      </div>
      <div className="tablet">
        <p>Shocking, jumpscare</p>
        <img src="./public/images/like-icon.svg" alt="like-icon" />
      </div>
      <img src="./public/images/download-icon.svg" alt="download-icon" />
      <img src="./public/images/3dot-icon.png" alt="3dot-icon" />
    </div>
  );
}

export default SoundRow;
