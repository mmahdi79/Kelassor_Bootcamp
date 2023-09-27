/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useState } from "react";
import { PLogo } from "./PLogo/PLogo";
import { PText } from "./PText/PText";
import { PButton } from "./PButton/PButton";
import { PComments } from "./PComments/PComments";

export const Post = () => {
  const postItems = [
    {
      id: 1,
      Image: "./public/images/post-profile-1.svg",
      profileName: "Smith jems",
      time: "12h ago",
      content:
        "In the fast-paced world of corporate life, it's crucial to prioritize your mental peace. Take moments to breathe, reflect, and recharge. Seek solace in small rituals, like morning walks, deep breaths, or a quick meditation session during breaks. #mentalpeace #corporatelife",
    },
    {
      id: 2,
      Image: "./public/images/post-profile-2.svg",
      profileName: "Robert Fox",
      time: "1d ago",
      content: "Creativity is intelligence having fun! #design #stevejobs",
      postImage: "./public/images/post-image.png",
    },
  ];
  return (
    <ul className="posts">
      {postItems.map((item) => {
        return (
          <li key={item.id}>
            <PLogo
              profileImage={item.Image}
              postTime={item.time}
              profileName={item.profileName}
            />
            <PText postText={item.content} postImage={item.postImage} />
            <PButton />
            <PComments />
          </li>
        );
      })}
    </ul>
  );
};

Post.propTypes = {};
