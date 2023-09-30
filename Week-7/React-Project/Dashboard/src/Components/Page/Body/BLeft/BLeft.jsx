import "./BLeft.css";
import { useState } from "react";
import { LCreatPost } from "./LCreatPost/LCreatPost";
import { LPosts } from "./LPosts/LPosts";
import { LStories } from "./LStories/LStories";

export const BLeft = () => {
  const [text, setText] = useState("");
  const [postState, setPostState] = useState(false);
  const [postItems, setPostItems] = useState([
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
    },
  ]);

  const handleClick = () => {
    setPostState(true);
    const postDitail = {
      id: Math.floor(Math.random() * 10000),
      Image: "./public/images/profile-2-icon.svg",
      profileName: "Mahdi",
      time: "00:00",
      content: text,
    };
    addPost(postDitail);
  };

  const addPost = (event) => {
    setPostItems((prevPostItem) => {
      return [...prevPostItem, event];
    });
  };

  return (
    <div className="body-left">
      <LStories />
      <LCreatPost text={text} setText={setText} handleClick={handleClick} />
      <LPosts postItems={postItems} postState={postState} />
    </div>
  );
};
