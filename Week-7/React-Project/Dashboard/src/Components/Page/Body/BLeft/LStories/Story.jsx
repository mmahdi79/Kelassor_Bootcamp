/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";

export const Story = ({ img, name }) => {
  return (
    <li>
      <span>
        <img src={img} alt="" />
      </span>
      <p>{name}</p>
    </li>
  );
};

Story.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};
