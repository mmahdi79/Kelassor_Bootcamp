import { ListItem } from "./ListItem";

export const Slist = () => {
  const listItem = [
    {
      id: 1,
      icon: "./public/images/home-icon.svg",
      name: "Home",
    },
    {
      id: 2,
      icon: "./public/images/message-icon.svg",
      name: "Messages",
    },
    {
      id: 3,
      icon: "./public/images/profile-icon.svg",
      name: "Profile",
    },
    {
      id: 4,
      icon: "./public/images/save-icon.svg",
      name: "Saved post",
    },
    {
      id: 5,
      icon: "./public/images/market-icon.svg",
      name: "Marketplace",
    },
  ];
  return (
    <ul className="side-bar-list">
      {listItem.map((item) => {
        return <ListItem key={item.id} img={item.icon} name={item.name} />;
      })}
    </ul>
  );
};
