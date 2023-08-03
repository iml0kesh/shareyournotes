import React, { useState } from "react";

const PostNote = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleNote = (e) => {
    setNote(e.target.value);
  };

  async function postNoteData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  const handleSave = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Bro atleast give title");
    } else {
      postNoteData("http://localhost:3001/note/createNote", {
        userId: "SampleId",
        title: title,
        notes: note,
      }).then((data) => {
        console.log(data);
      });
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="">Title</label>
        <input type="text" placeholder="Title please" onChange={handleTitle} />

        <label htmlFor="">Notes</label>
        <input type="text" placeholder="Notes please" onChange={handleNote} />

        <button onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default PostNote;
