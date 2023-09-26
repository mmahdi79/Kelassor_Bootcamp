// import React from 'react'
import "./TextInput.css";
import PropTypes from "prop-types";
export const TextInput = ({ text, setText }) => {
  return (
    <div className="text-input">
      <img src="./public/images/profile.svg" alt="" />
      <input
        type="text"
        placeholder="What’s on your mind?"
        value={text}
        onChange={(e) => {
          setText = e.target.value;
        }}
      />
    </div>
  );
};
TextInput.propTypes = {
  text: PropTypes.string,
  setText: PropTypes.string,
};
