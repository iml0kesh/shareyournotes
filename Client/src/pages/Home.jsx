import { React, useEffect, useState } from "react";
import axios from "axios";

import Nav from "../components/Nav";

const Home = ({ isLogin, setIsLogin }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const res = await axios.get("http://localhost:3001/note/notes");
      setNotes(res.data);
    };
    getNotes();
  }, []);

  const [userNotes, setUserNotes] = useState([]);
  const [token, setToken] = useState("");

  const getUserNotes = async (token) => {
    const res = await axios.get("http://localhost:3001/note/usersnotes", {
      headers: { Authorization: token },
    });
    console.log(res);
    setUserNotes(res.data);
  };

  useEffect(() => {
    const token = localStorage.getItem("activeToken");
    setToken(token);
    if (token) {
      getUserNotes(token);
    }
  }, []);

  return (
    <div>
      <Nav isLogin={isLogin} setIsLogin={setIsLogin} />
      <div className="landpage">
        <div className="section1">
          <h1 className="head1">Sharing Is Caring</h1>
          <br />
          <br />
          {/* <a href="/note" className="addNote-btn">
            Add Notes
          </a> */}
        </div>
        <div className="notes-container">
          {notes.map((note) => (
            <div className="note-card" key={note._id}>
              <h1 title={note.title}>{note.title}</h1>
              <p>{note.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
