/* eslint-disable no-unused-vars */
import "./App.css";
import { Page } from "./Components/Page/Page";
import { SideBar } from "./Components/SideBar/SideBar";

export const App = () => {
  return (
    <div className="app">
      <SideBar />
      <Page />
    </div>
  );
};
