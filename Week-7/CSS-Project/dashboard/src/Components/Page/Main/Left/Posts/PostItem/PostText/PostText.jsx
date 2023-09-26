/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import PropTypes from "prop-types";

export const PostText = ({ text }) => {
  return (
    <div className="post-text">
      <p>{text}</p>
    </div>
  );
};
PostText.propTypes = {
  text: PropTypes.string,
};
