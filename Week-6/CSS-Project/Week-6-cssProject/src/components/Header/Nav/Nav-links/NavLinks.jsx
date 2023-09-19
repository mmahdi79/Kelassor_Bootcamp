// eslint-disable-next-line no-unused-vars
import React from "react";
import "./NavLinks.css";

function NavLinks() {
  return (
    <div>
      <ul className="nav-link">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Best for Youtube</a>
        </li>
        <li>
          <a href="#">Category</a>
        </li>
        <li>
          <a href="#">Upgrade</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">
            <button>Login</button>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
