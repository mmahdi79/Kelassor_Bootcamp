/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";

export const PLogo = ({ profileImage, postTime, profileName }) => {
  return (
    <div className="post-logo">
      <img src={profileImage} alt="" />
      <span>
        <p>{profileName}</p>
        <p>{postTime}</p>
      </span>
    </div>
  );
};

PLogo.propTypes = {
  profileImage: PropTypes.string,
  postTime: PropTypes.string,
  profileName: PropTypes.string,
};
