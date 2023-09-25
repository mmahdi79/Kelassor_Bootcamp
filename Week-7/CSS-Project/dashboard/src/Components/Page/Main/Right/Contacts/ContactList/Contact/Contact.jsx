// import React from "react";
import PropTypes from "prop-types";

import { ContactList } from "../ContactList";

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
ContactList.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};
