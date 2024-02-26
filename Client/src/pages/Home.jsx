import { React, useEffect, useState } from "react";
import axios from "axios";

import Nav from "../components/Nav";

const Home = ({ isLogin, setIsLogin }) => {
  // To get All Notes In the Database.
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const res = await axios.get("http://localhost:3001/note/notes");
      setNotes(res.data);
    };
    getNotes();
  }, []);

  // To get Only the users Notes.
  const [userNotes, setUserNotes] = useState([]);
  const [userN, setMyNotes] = useState(false);
  const [token, setToken] = useState("");

  const getUserNotes = async (token) => {
    const res = await axios.get("http://localhost:3001/note/usr", {
      headers: { activeToken: token },
    });
    setUserNotes(res.data);
  };

  useEffect(() => {
    const token = localStorage.getItem("activeToken");
    setToken(token);
    if (token) {
      getUserNotes(token);
    } else {
      setUserNotes([
        {
          _id: "9999",
          title: "OppS",
          content: "You need to login to see your notes.",
        },
      ]);
    }
  }, []);

  // Open the Selected Note.
  const [selectedCard, setSelectedCard] = useState(null);
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  const closeOverlay = () => {
    setSelectedCard(null);
  };

  return (
    <div>
      <Nav
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        setMyNotes={setMyNotes}
        userN={userN}
      />
      <div className="landpage">
        <div className="section1">
          <h1 className="head1">Sharing Is Caring</h1>
          <br />
          <br />
        </div>
        <div className="notes-container">
          {!userN
            ? notes.map((note) => (
                <div
                  className="note-card"
                  key={note._id}
                  onClick={() => handleCardClick(note)}
                >
                  <h1 title={note.title}>{note.title}</h1>
                  <p>{note.content}</p>
                </div>
              ))
            : userNotes.map((note) => (
                <div className="note-card" key={note._id}>
                  <h1 title={note.title}>{note.title}</h1>
                  <p>{note.content}</p>
                </div>
              ))}
        </div>
      </div>
      {selectedCard && (
        <div className="overlay">
          <div className="overlay-content">
            <h1>{selectedCard.title}</h1>
            <p>{selectedCard.content}</p>
            <button onClick={closeOverlay}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
