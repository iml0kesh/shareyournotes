import React from "react";

const MiniNote = ({ title, note }) => {
  return (
    <div>
      <label>{title}</label>
      <p>{note}</p>
    </div>
  );
};

export default MiniNote;
