// import React from 'react'
import "./List.css";
import { useState } from "react";
import { ListItem } from "./ListItem/ListItem";

export const List = () => {
  // eslint-disable-next-line no-unused-vars
  const [option, setOption] = useState([
    { id: 1, title: "Home", src: "./public/images/home.svg" },
    { id: 2, title: "Messages", src: "./public/images/message.svg" },
    { id: 3, title: "Profile", src: "./public/images/user.svg" },
    { id: 4, title: "Saved post", src: "./public/images/save.svg" },
    { id: 5, title: "Marketplace", src: "./public/images/activity.svg" },
  ]);

  return (
    <ul className="side-bar-list">
      {option.map((item) => {
        return <ListItem key={item.id} image={item.src} name={item.title} />;
      })}
    </ul>
  );
};
