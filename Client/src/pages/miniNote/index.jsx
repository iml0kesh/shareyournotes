import React, { useEffect, useState } from "react";
import MiniNote from "./MiniNote";

const MiniCardNote = () => {
  // async function getNotes(url = "") {
  //   const response = await fetch(url, {
  //     method: "GET",
  //     mode: "cors",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   console.log(response.json);
  // }

  // getNotes("http:/localhost:3001/note/notes");

  const [miniCard, setMiniCard] = useState([]);

  async function getNotes() {
    try {
      const response = await fetch("http://localhost:3001/note/notes", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const notesData = await response.json();
      console.log(notesData[0].note);
      setMiniCard(notesData[0].note);
    } catch (err) {
      console.error("BRO error", err);
    }
  }

  useEffect(() => {
    getNotes();
  }, {});

  // getNotes();

  return (
    <div>
      {miniCard.map((notesData, index) => (
        <MiniNote key={index} title={notesData.title} note={notesData.notes} />
      ))}
    </div>
  );
};

export default MiniCardNote;
