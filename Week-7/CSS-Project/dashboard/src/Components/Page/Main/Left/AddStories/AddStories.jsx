// import React from "react";
import "./AddStories.css";
import { useState } from "react";
import { Story } from "./Story/Story";

export const AddStories = () => {
  // eslint-disable-next-line no-unused-vars
  const [story, setStory] = useState([
    { id: 0, src: "./public/images/add-story.svg", name: "Add Story" },
    { id: 1, src: "./public/images/story-1.png", name: "Esther Howard" },
    { id: 2, src: "./public/images/story-2.png", name: "Arlene McCoy" },
    { id: 3, src: "./public/images/story-3.png", name: "Robert Fox" },
    { id: 4, src: "./public/images/story-4.png", name: "Albert Flores" },
    { id: 5, src: "./public/images/story-5.png", name: "Annette Black" },
  ]);
  return (
    <ul className="story">
      {story.map((option) => {
        return <Story key={option.id} image={option.src} name={option.name} />;
      })}
    </ul>
  );
};
