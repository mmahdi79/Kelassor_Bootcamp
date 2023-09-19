// eslint-disable-next-line no-unused-vars
import React from "react";
import "./SearchBox.css";

function SearchBox() {
  return (
    <div className="search-box">
      <form action="#">
        <button>
          <img src="./public/images/search-icon.svg" alt="" />
        </button>
        <input
          type="search"
          aria-label="Search for inspiration"
          placeholder="Search sound effects"
        />
      </form>
      <p>Try keyword: happy, funny, natural, horror, jumpscare and more</p>
    </div>
  );
}

export default SearchBox;
