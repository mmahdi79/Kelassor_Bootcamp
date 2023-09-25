// import React from "react";
import PropTypes from "prop-types";

export const Story = ({ name, image }) => {
  return (
    <li>
      <a href="#">
        <img src={image} alt="" />
      </a>
      <p>{name}</p>
    </li>
  );
};
Story.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};
