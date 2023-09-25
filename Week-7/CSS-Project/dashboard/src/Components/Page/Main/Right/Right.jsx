// import React from "react";
import { useState } from "react";
import { Contacts } from "./Contacts/Contacts";

export const Right = () => {
  // eslint-disable-next-line no-unused-vars
  const [contact, setContact] = useState([
    { id: 0, src: "./public/images/contact-1.png", name: "Bessie Cooper" },
    { id: 1, src: "./public/images/contact-2.png", name: "Savannah Nguyen" },
    { id: 2, src: "./public/images/contact-3.png", name: "Ralph Edwards" },
    { id: 3, src: "./public/images/contact-4.png", name: "Jerome Bell" },
    { id: 4, src: "./public/images/contact-5.png", name: "Ronald Richards" },
    { id: 5, src: "./public/images/contact-6.png", name: "Dianne Russell" },
  ]);
  // eslint-disable-next-line no-unused-vars
  const [suggest, setSuggest] = useState([
    { id: 6, src: "./public/images/suggest-1.png", name: "Graphic design" },
    {
      id: 7,
      src: "./public/images/suggest-2.png",
      name: "Technology news update",
    },
    { id: 8, src: "./public/images/suggest-3.png", name: "Freelancing tips" },
    { id: 9, src: "./public/images/suggest-4.png", name: "Marketing" },
    { id: 10, src: "./public/images/suggest-5.png", name: "Blender tutorials" },
    { id: 11, src: "./public/images/suggest-6.png", name: "Power of learning" },
  ]);
  return (
    <div className="right">
      <Contacts title="Contacts" option={contact} />
      <Contacts title="Suggested pages" option={suggest} />
    </div>
  );
};
