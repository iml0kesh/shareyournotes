// MiniNote.jsx
import React from "react";
import "./miniNote.css"; // Import your CSS file

const MiniNote = ({ title, note }) => {
  return (
    <div className="mini-note-card">
      <h3 className="note-title">{title}</h3>
      <p className="note-content">{note}</p>
    </div>
  );
};

export default MiniNote;
