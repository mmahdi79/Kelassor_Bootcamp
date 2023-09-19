// eslint-disable-next-line no-unused-vars
import React from "react";
import "./SoundEffects.css";
import SHeader from "./SHeader/SHeader";
import SList from "./SList/SList";
import SoundE from "./SoundE/SoundE";

function SoundEffects() {
  return (
    <div className="sound-effect">
      <SHeader></SHeader>
      <SList></SList>
      <SoundE></SoundE>
    </div>
  );
}

export default SoundEffects;
