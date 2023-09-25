// import React from "react";
import { AddStories } from "./AddStories/AddStories";
import { CreatePost } from "./CreatePost/CreatePost";
import "./Left.css";

export const Left = () => {
  return (
    <div>
      <AddStories />
      <CreatePost />
    </div>
  );
};