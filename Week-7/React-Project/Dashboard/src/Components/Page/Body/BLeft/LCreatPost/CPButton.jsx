/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";

export const CPButton = ({ handleClick }) => {
  return (
    <div className="create-post-button">
      <span>
        <img src="./public/images/gallery-icon.svg" alt="" />
        <img src="./public/images/music-icon.svg" alt="" />
        <img src="./public/images/calender-icon.svg" alt="" />
      </span>

      <button onClick={handleClick}>Create a post</button>
    </div>
  );
};

CPButton.propTypes = {
  handleClick: PropTypes.func,
};
