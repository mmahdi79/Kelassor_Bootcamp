/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { PLogo } from "./PLogo/PLogo";
import { PText } from "./PText/PText";
import { PButton } from "./PButton/PButton";
import { PComments } from "./PComments/PComments";

export const Post = ({ postState, postItems }) => {
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
            <PText postText={item.content} />
            <PButton />
            <PComments />
          </li>
        );
      })}
    </ul>
  );
};

Post.propTypes = {
  postState: PropTypes.bool,
  postItems: PropTypes.array,
};
