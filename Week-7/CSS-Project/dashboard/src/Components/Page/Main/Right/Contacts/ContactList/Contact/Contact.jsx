// import React from "react";
import PropTypes from "prop-types";


export const Contact = ({ name, image }) => {
  return (
    <li>
      <a href="#">
        <img src={image} alt="" />
      </a>
      <p>{name}</p>
    </li>
  );
};
Contact.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};
