import { React, useEffect, useState } from "react";
import axios from "axios";

const Home = ({ setIsLogin }) => {
  const [notes, setNotes] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const getNotes = async () => {
      const res = await axios.get("http://localhost:3001/note/notes");
      setNotes(res.data);
    };
    getNotes();
  }, []);

  console.log(notes);

  return (
    <div>
      <div className="landpage">
        <div className="section1">
          <h1 className="head1">Sharing Is Caring</h1>
          <br />
          <br />
          <a href="/note" className="addNote-btn">
            Add Notes
          </a>
        </div>
      </div>
      <h1>Hello</h1>
      {notes.map((note) => (
        <div className="" key={note._id}>
          <h1 title={note.title}>{note.title}</h1>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
