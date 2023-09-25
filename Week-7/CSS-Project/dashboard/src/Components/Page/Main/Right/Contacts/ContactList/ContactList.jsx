// import React from "react";
import { Contact } from "./Contact/Contact";
import "./ContactList.css";
import PropTypes from "prop-types";

export const ContactList = ({ list }) => {
  return (
    <>
      <ul className="contact-list">
        {list.map((listItem) => {
          return (
            <Contact
              key={listItem.id}
              image={listItem.src}
              name={listItem.name}
            />
          );
        })}
      </ul>
    </>
  );
};
ContactList.propTypes = {
  list: PropTypes.array,
};
