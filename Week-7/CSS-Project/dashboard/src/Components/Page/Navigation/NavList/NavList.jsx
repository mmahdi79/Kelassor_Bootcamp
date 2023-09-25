// import React from "react";
import { ListItem } from "./ListItem/ListItem";
import "./NavList.css";

export const NavList = () => {
  const listTitle = ["Explore", "Community post", "Pages"];
  return (
    <ul className="nav-list">
      {listTitle.map((title) => {
        return <ListItem key={title.indexOf} name={title} />;
      })}
    </ul>
  );
};
