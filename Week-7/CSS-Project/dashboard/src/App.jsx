// import React from "react";
import "./App.css";
import { Page } from "./Components/Page/Page";
import { SideBar } from "./Components/SideBar/SideBar";

export const App = () => {
  return (
    <div className="body">
      <SideBar />
      <Page />
    </div>
  );
};
