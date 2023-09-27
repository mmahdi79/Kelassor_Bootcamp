/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";

import React from "react";

export const NListItem = ({ name }) => {
  return (
    <li>
      <a href="#">{name}</a>
    </li>
  );
};

NListItem.propTypes = {
  name: PropTypes.string,
};
