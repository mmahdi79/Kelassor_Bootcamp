// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Category.css";
import CHeader from "./CHeader/CHeader";
import CBoxes from "./CBoxes/CBoxes";

function Category() {
  return (
    <div className="category">
      <CHeader></CHeader>
      <CBoxes></CBoxes>
      <p>
        <a href="#">See all category</a>
      </p>
    </div>
  );
}

export default Category;
