// import React from "react";
import "./CreatePost.css";
import { TextInput } from "./TextInput/TextInput";
import { Buttons } from "./buttons/buttons";

export const CreatePost = () => {
  return (
    <div className="create-post">
      <TextInput />
      <Buttons />
    </div>
  );
};
