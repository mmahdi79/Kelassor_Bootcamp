// import React from "react";
import "./Left.css";
import { AddStories } from "./AddStories/AddStories";
import { CreatePost } from "./CreatePost/CreatePost";
import { Posts } from "./Posts/Posts";
import { useState } from "react";

export const Left = () => {
  const [text, setText] = useState("");
  return (
    <div className="left">
      <AddStories />
      <CreatePost />
      <Posts text={text} />
    </div>
  );
};
