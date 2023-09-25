// import React from "react";
import "./ListItem.css";
import PropTypes from "prop-types";

export const ListItem = ({ name, image }) => {
  return (
    <li>
      <img src={image} alt="" />
      <a href="#">{name}</a>
    </li>
  );
};

ListItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};
