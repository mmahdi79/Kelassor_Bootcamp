/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { CPButton } from "./CPButton";
import { CPInput } from "./CPInput";

export const LCreatPost = ({ text, setText, handleClick }) => {
  return (
    <div className="create-post">
      <CPInput text={text} setText={setText} />
      <CPButton handleClick={handleClick} />
    </div>
  );
};
LCreatPost.propTypes = {
  text: PropTypes.string,
  setText: PropTypes.func,
  handleClick: PropTypes.func,
};
