import "./SideBar.css";
import { SFooter } from "./SFooter/SFooter";
import { Slist } from "./SList/Slist";
import { SLogo } from "./SLogo/SLogo";

export const SideBar = () => {
  return (
    <div className="side-bar">
      <SLogo />
      <Slist />
      <SFooter />
    </div>
  );
};
