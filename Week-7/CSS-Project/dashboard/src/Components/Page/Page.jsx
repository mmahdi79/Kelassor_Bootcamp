// import React from "react";
import "./Page.css";
import { Navigation } from "./Navigation/Navigation";
import { Main } from "./Main/Main";

export const Page = () => {
  return (
    <div className="page">
      <Navigation />
      <Main />
    </div>
  );
};
