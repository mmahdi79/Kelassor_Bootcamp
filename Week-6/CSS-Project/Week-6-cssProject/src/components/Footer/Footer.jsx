// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";
import FLogo from "./FLogo/FLogo";
import FLinks from "./FLinks/FLinks";

function Footer() {
  return (
    <div className="container-fluid footer">
      <FLogo></FLogo>
      <FLinks></FLinks>
    </div>
  );
}

export default Footer;
