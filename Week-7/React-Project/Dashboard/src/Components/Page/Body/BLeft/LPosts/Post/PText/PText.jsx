/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";

export const PText = ({ postText, postImage }) => {
  return (
    <div className="post-text">
      <p>{postText}</p>
      <img src={postImage} alt="" />
    </div>
  );
};

PText.propTypes = {
  postText: PropTypes.string,
  postImage: PropTypes.string,
};
