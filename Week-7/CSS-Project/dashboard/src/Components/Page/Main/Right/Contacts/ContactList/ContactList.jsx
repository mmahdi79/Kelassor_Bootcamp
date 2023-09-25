// import React from "react";
import "./ContactList.css";
import { useState } from "react";

export const ContactList = () => {
  // eslint-disable-next-line no-unused-vars
  const [contact, setContact] = useState([
    { id: 0, src: "./public/images/contact-1.png", name: "Bessie Cooper" },
    { id: 1, src: "./public/images/contact-2.png", name: "Savannah Nguyen" },
    { id: 2, src: "./public/images/contact-3.png", name: "Ralph Edwards" },
    { id: 3, src: "./public/images/contact-4.png", name: "Jerome Bell" },
    { id: 4, src: "./public/images/contact-5.png", name: "Ronald Richards" },
    { id: 5, src: "./public/images/contact-6.png", name: "Dianne Russell" },
  ]);
  return (
    <ul>
      {contact.map((listItem) => {
        return (
          <ContactList
            key={listItem.id}
            image={listItem.src}
            name={listItem.name}
          />
        );
      })}
    </ul>
  );
};
