// import React from "react";
import "./Contacts.css";
import PropTypes from "prop-types";
import { ContactList } from "./ContactList/ContactList";

export const Contacts = ({ title, option }) => {
  return (
    <div className="contacts">
      <div className="contact-title">
        <p>{title}</p>
      </div>
      <ContactList list={option} />
      <span className="view-all">
        <a href="#">View all</a>
      </span>
    </div>
  );
};
Contacts.propTypes = {
  title: PropTypes.string,
  option: PropTypes.array,
};
