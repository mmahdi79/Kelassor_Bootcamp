// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Hero.css";
import Title from "./Title/Title";
import SearchBox from "./Search-Box/SearchBox";
import EndOfHeader from "./End-Of-Header/EndOfHeader";

function Hero() {
  return (
    <div className="hero">
      <Title></Title>
      <SearchBox></SearchBox>
      <EndOfHeader></EndOfHeader>
    </div>
  );
}

export default Hero;
