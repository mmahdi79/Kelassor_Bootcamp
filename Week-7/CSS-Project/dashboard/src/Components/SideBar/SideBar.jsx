// import React from 'react'
import "./SideBar.css";
import { Footer } from "./Footer/Footer";
import { List } from "./List/List";
import { Logo } from "./Logo/Logo";

export const SideBar = () => {
  return (
    <div className="side-bar">
      <Logo />
      <List />
      <Footer />
    </div>
  );
};
