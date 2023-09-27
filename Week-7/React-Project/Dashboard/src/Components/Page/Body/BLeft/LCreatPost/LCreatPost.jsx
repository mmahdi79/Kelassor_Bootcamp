/* eslint-disable no-unused-vars */
import { CPButton } from "./CPButton";
import { CPInput } from "./CPInput";
import { useState } from "react";
import { PText } from "../LPosts/Post/PText/PText";

export const LCreatPost = () => {
  const [text, setText] = useState("");

  const handleClick = () => {
    
  };

  return (
    <div className="create-post">
      <CPInput text={text} setText={setText} />
      <CPButton handleClick={handleClick} />
    </div>
  );
};
