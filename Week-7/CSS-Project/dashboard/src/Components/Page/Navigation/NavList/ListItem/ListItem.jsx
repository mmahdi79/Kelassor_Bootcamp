// import React from "react";
import PropTypes from "prop-types";

export const ListItem = ({ name }) => {
  return (
    <li>
      <a href="#">{name}</a>
    </li>
  );
};

ListItem.propTypes = {
  name: PropTypes.string,
};
