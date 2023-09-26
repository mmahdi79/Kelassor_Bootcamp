// import React from "react";
// import { useState } from "react";
import { PostComment } from "./PostComment/PostComment";
import { PostLikes } from "./PostLikes/PostLikes";
import { PostLogo } from "./PostLogo/PostLogo";
import { PostText } from "./PostText/PostText";

export const PostItem = () => {
  return (
    <div className="post-item">
      <PostLogo />
      <PostText />
      <PostLikes />
      <PostComment />
    </div>
  );
};
