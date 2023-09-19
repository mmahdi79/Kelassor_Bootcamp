// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Nav.css";
import NavLogo from "./Nav-logo/NavLogo";
import NavLinks from "./Nav-links/NavLinks";
import NavMenu from "./Nav-menu/NavMenu";

function Nav() {
  return (
    <nav>
      <NavLogo></NavLogo>
      <NavLinks></NavLinks>
      <NavMenu></NavMenu>
    </nav>
  );
}

export default Nav;
