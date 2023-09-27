/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";

export const PButton = () => {
  return (
    <div className="post-button">
      <span>
        <img src="./public/images/like-icon.svg" alt="" />
        <p>2.8K Likes</p>
      </span>
      <span>
        <img src="./public/images/comment-icon.svg" alt="" />
        <p>7 Comments</p>
      </span>
      <span>
        <img src="./public/images/share-icon.svg" alt="" />
        <p>Share</p>
      </span>
    </div>
  );
};

PButton.propTypes = {};
