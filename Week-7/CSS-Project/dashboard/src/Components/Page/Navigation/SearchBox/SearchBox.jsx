// import React from 'react'
import "./SearchBox.css";

export const SearchBox = () => {
  return (
    <div className="search-box">
      <button>
        <img src="./public/images/search.svg" alt="" />
      </button>
      <input type="search" placeholder="Search" />
    </div>
  );
};
