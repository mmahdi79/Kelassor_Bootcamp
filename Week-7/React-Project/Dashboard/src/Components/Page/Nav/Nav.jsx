import { NList } from "./NList/NList";
import { NLogo } from "./NLogo/NLogo";
import { NSearch } from "./NSearch/NSearch";
import "./Nav.css";

export const Nav = () => {
  return (
    <nav>
      <NList />
      <NSearch />
      <NLogo />
    </nav>
  );
};
