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

  const data = [
    {
      title: "Note 1",
      notes:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis pariatur facere consequuntur cumque sapiente provident aliquid ab sint ex ullam beatae consectetur ducimus alias eos dolore nostrum, quaerat dolor a?",
    },
    {
      title: "Note 2",
      notes: "This is the content of Note 2.",
    },
    {
      title: "Note 3",
      notes: "This is the content of Note 3.",
    },
  ];

  const [miniCard, setMiniCard] = useState(data);

  return (
    <div>
      {miniCard.map((notesData, index) => (
        <MiniNote key={index} title={notesData.title} note={notesData.notes} />
      ))}
    </div>
  );
};

export default MiniCardNote;
