// eslint-disable-next-line no-unused-vars
import React from "react";
import "./SList.css";

function SList() {
  return (
    <div className="sound-list">
      <ul>
        <li>
          <a href="">All</a>
        </li>
        <li>
          <a href="">Jumpscare</a>
        </li>
        <li>
          <a href="">Mellow</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="">Happiness</a>
        </li>
        <li>
          <a href="">Ambience</a>
        </li>
        <li>
          <a href="">Zonk</a>
        </li>
      </ul>
    </div>
  );
}

export default SList;
