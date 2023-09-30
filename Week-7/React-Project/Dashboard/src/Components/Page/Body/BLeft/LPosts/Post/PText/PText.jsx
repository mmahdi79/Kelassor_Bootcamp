/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";

export const PText = ({ postText, postImage, text }) => {
  return (
    <>
      <div className="post-text">
        <p>{postText}</p>
      </div>
    </>
  );
};

PText.propTypes = {
  postText: PropTypes.string,
  postImage: PropTypes.string,
  text: PropTypes.string,
  postState: PropTypes.bool,
};
