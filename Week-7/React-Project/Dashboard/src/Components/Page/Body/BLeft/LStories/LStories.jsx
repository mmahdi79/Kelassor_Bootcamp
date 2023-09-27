import { Story } from "./Story";

export const LStories = () => {
  const story = [
    { id: 1, img: "./public/images/add-icon.svg", name: "Add Story" },
    { id: 2, img: "./public/images/story-1.png", name: "Esther Howard" },
    { id: 3, img: "./public/images/story-2.png", name: "Arlene McCoy" },
    { id: 4, img: "./public/images/story-3.png", name: "Robert Fox" },
    { id: 5, img: "./public/images/story-4.png", name: "Albert Flores" },
    { id: 6, img: "./public/images/story-5.png", name: "Annette Black" },
  ];
  return (
    <ul className="body-left-story">
      {story.map((title) => {
        return <Story key={title.id} img={title.img} name={title.name} />;
      })}
    </ul>
  );
};
