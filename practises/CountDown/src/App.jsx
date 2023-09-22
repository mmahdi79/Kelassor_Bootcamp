// import { useState } from "react";
import "./App.css";
import { Timer } from "./components/Timer/Timer";

export const App = () => {
  return (
    <div className="container">
      <Timer initialMinutes={0} initialSeconds={0} />
    </div>
  );
};
