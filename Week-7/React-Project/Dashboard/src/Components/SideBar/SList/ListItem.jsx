import PropTypes from "prop-types";

export const ListItem = ({ img, name }) => {
  return (
    <div>
      <li>
        <img src={img} alt="" />
        <a href="#">{name}</a>
      </li>
    </div>
  );
};

ListItem.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};
