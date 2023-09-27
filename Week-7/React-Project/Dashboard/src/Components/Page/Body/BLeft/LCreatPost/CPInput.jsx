/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";

export const CPInput = ({ text, setText }) => {
  return (
    <div className="create-post-input">
      <img src="./public/images/profile-2-icon.svg" alt="" />
      <input
        type="text"
        placeholder="What’s on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

CPInput.propTypes = {
  text: PropTypes.string,
  setText: PropTypes.func,
};
