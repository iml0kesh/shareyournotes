import React from "react";
import "./landPage.css";
import Header from "../headerComp/headerComp";
import Howitworks from "../howitworksComp/howItWorksComp";
import AddNote from "../../pages/addNote";

const landpage = () => {
  return (
    <div className="landpage">
      <Header />
      <div className="section1">
        <h1 className="head1">Sharing Is Caring</h1>
        <button className="addNote-btn" onClick={""}>
          Add Notes
        </button>
      </div>
      <div className="section2"></div>
    </div>
  );
};

export default landpage;
