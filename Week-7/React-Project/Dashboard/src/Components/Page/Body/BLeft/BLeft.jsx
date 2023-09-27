import "./BLeft.css";
import { LCreatPost } from "./LCreatPost/LCreatPost";
import { LPosts } from "./LPosts/LPosts";
import { LStories } from "./LStories/LStories";

export const BLeft = () => {
  return (
    <div className="body-left">
      <LStories />
      <LCreatPost />
      <LPosts />
    </div>
  );
};
