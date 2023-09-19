// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Body.css";
import SoundEffects from "./Sound-effects/SoundEffects";
import Category from "./Category/Category";
import WhyUs from "./Why-us/WhyUs";
import Testimonials from "./Testimonials/Testimonials";

function Body() {
  return (
    <div className="container">
      <SoundEffects></SoundEffects>
      <Category></Category>
      <WhyUs></WhyUs>
      <Testimonials></Testimonials>
    </div>
  );
}

export default Body;
