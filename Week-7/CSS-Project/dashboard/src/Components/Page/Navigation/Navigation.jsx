// import React from "react";
import { NavList } from "./NavList/NavList";
import { NavProfile } from "./NavProfile/NavProfile";
import "./Navigation.css";
import { SearchBox } from "./SearchBox/SearchBox";

export const Navigation = () => {
  return (
    <nav>
      <NavList />
      <SearchBox />
      <NavProfile />
    </nav>
  );
};
