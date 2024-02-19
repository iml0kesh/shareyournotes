import React from "react";
import Header from "../Header/header";
import MiniNotes from "../miniNote/index";

const Landpage = () => {
  return (
    <div>
      <Header />
      <div className="landpage">
        <div className="section1">
          <h1 className="head1">Sharing Is Caring</h1>
          <br />
          <br />
          <a href="/createnote" className="addNote-btn">
            Add Notes
          </a>
        </div>
        <MiniNotes />
      </div>
    </div>
  );
};

export default Landpage;
