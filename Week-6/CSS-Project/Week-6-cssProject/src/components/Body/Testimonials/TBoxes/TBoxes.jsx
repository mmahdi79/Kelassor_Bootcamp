// eslint-disable-next-line no-unused-vars
import React from "react";
import "./TBoxes.css";
import TBox from "./TBox/TBox";

function TBoxes() {
  return (
    <div className="tes-boxes">
      <TBox></TBox>
      <div className="tab">
        <TBox></TBox>
      </div>  
      <div className="desk">
        <TBox></TBox>
      </div>  
    </div>
  );
}

export default TBoxes;
