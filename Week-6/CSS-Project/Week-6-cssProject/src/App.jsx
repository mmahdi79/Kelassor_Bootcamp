// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TrustedBy from "./components/Trusted-By/TrustedBy";

function App() {
  return (
    <div>
      <Header></Header>
      <TrustedBy></TrustedBy>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
