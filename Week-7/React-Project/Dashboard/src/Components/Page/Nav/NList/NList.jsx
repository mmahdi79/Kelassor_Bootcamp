import { NListItem } from "./NListItem";

export const NList = () => {
  const listName = [
    { id: 1, caption: "Explore" },
    { id: 2, caption: "Community post" },
    { id: 3, caption: "Pages" },
  ];
  return (
    <ul className="nav-list">
      {listName.map((item) => {
        return <NListItem key={item.id} name={item.caption} />;
      })}
    </ul>
  );
};
