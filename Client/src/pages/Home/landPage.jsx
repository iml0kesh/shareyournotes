import React from "react";
import Header from "../Header/header";

const Landpage = () => {
  return (
    <div className="landpage">
      <Header />
      <div className="section1">
        <h1 className="head1">Sharing Is Caring</h1>
        <button className="addNote-btn" onClick={""}>
          Add Notes
        </button>
      </div>
    </div>
  );
};

export default Landpage;
