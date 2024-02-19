// MiniNote.jsx
import React from "react";
import "./miniNote.css"; // Import your CSS file

const MiniNote = ({ title, note }) => {
  return (
    <div class="mini-note">
      <div class="note-title">{title}</div>

      <div class="info-tags">
        <div class="read">2 min read</div>
        <div class="posted">posted 2 days ago.</div>
      </div>

      <div class="content">
        <p> {note}</p>
      </div>
    </div>
  );
};

export default MiniNote;
