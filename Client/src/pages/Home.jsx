import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import Nav from "../components/Nav";

const Home = ({ isLogin, setIsLogin }) => {
  const navigate = useNavigate();
  // To get All Notes In the Database.
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const res = await axios.get("note/notes");
      setNotes(res.data);
    };
    getNotes();
  }, []);

  // To get Only the users Notes.
  const [userId, setUserId] = useState("");
  const [userNotes, setUserNotes] = useState([]);
  const [userN, setMyNotes] = useState(false);
  const [token, setToken] = useState("");

  const getUserNotes = async (token) => {
    const res = await axios.get("note/usr", {
      headers: { activeToken: token },
    });
    setUserNotes(res.data);
  };

  useEffect(() => {
    const token = localStorage.getItem("activeToken");
    const user = localStorage.getItem("userId");
    setToken(token);
    if (token) {
      getUserNotes(token);
      setUserId(user);
    } else {
      setUserNotes([
        {
          _id: "9999",
          title: "opps",
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

  const handleCreate = () => {
    if (userId) {
      navigate("/create");
    } else {
      alert("Please Login in");
    }
  };

  const deleteNote = async (id) => {
    try {
      if (token) {
        await axios.delete(`/note/delete/${id}`, {
          headers: { activeToken: token },
        });
        getUserNotes(token);
      }
    } catch (error) {
      console.log(error);
      alert("error");
    }
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
          {/* To Get all Notes in the Database */}

          <div className="notes-nav">
            <p onClick={handleCreate}>Create</p>
          </div>

          <div className="notes">
            {!userN
              ? notes.map((note) => (
                  <div
                    className="note-card"
                    key={note._id}
                    onClick={() => handleCardClick(note)}
                  >
                    <h1 title={note.title}>{note.title}</h1>
                    <p>{note.content}</p>
                    <div className="card-footer">
                      <div className="f-comp">{note.userId}</div>
                      <div className="f-comp"></div>
                    </div>
                  </div>
                ))
              : // To Get the User's Note's

                userNotes.map((note) => (
                  <div className="note-card" key={note._id}>
                    <h1 title={note.title}>{note.title}</h1>
                    <p onClick={() => handleCardClick(note)}>{note.content}</p>
                    <div className="card-footer">
                      <Link to={`edit/${note._id}`}>Edit</Link>
                      <button onClick={() => deleteNote(note._id)}>
                        Delete
                      </button>
                      <div className="f-comp">2 days ago</div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>

      {/* To View the Selected Note */}

      {selectedCard && (
        <div className="overlay">
          <div className="overlay-content">
            <div className="note-header">
              <h1>{selectedCard.title}</h1>
              <h4 className="close" onClick={closeOverlay}>
                {" "}
                X
              </h4>
            </div>

            {/* To Check if the Selected card was the user's */}

            <p>{selectedCard.content}</p>
            {userId === selectedCard.userId && (
              <div className="card-footer-edit">
                <Link to={`edit/${selectedCard._id}`} className="f-ecomp">
                  Edit
                </Link>
                <div className="f-ecomp">2 days ago</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
