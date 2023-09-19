// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Testimonials.css";
import THeader from "./THeader/THeader";
import TBoxes from "./TBoxes/TBoxes";

function Testimonials() {
  return (
    <div className="testimonials">
      <THeader></THeader>
      <TBoxes></TBoxes>
      <img src="./public/images/tes-3dot.svg" alt="" />
    </div>
  );
}

export default Testimonials;
