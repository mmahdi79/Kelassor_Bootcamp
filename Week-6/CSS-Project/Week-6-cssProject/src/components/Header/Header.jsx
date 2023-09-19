// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Header.css";
import Nav from "./Nav/Nav";
import Hero from "./Hero/Hero";

function Header() {
  return (
    <header className=".container-fluid">
      <Nav></Nav>
      <Hero></Hero>
    </header>
  );
}

export default Header;
