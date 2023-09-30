import PropTypes from "prop-types";
import { Post } from "./Post/Post";

export const LPosts = ({ postItems, postState }) => {
  return (
    <div>
      <Post postItems={postItems} postState={postState} />
    </div>
  );
};
LPosts.propTypes = {
  postItems: PropTypes.array,
  postState: PropTypes.bool,
};
