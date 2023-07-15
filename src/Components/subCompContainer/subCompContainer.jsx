import React from "react";
import SubCard from "../subcomp/subjectComp";
// import { text } from "express";

const SubCompContainer = () => {
  return (
    <div className="NoteContainer">
      <div className="note-container_notes">
          <SubCard />
      </div>
    </div>
  );
};

export default SubCompContainer;
