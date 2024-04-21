import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateNote = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const navigate = useNavigate();

  const createNote = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("activeToken");
      if (token) {
        const { title, content } = note;
        const newNote = {
          title,
          content,
        };
        console.log(newNote);
        await axios.post("note/createnote", newNote, {
          headers: { activeToken: token },
        });
      }
      navigate("/");
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  return (
    <form onSubmit={createNote}>
      <div className="overlay">
        <div className="overlay-content">
          <div className="left">
            <div className="note-header">
              <input
                type="text"
                value={note.title}
                id="title"
                name="title"
                required
                className="input-title"
                onChange={handleChange}
              />
            </div>
            <textarea
              type="text"
              value={note.content}
              id="content"
              name="content"
              required
              className="input-content"
              onChange={handleChange}
            />
          </div>
          <div className="right">
            <button>Close</button>
            <button type="submit" className="note-save">
              Create
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
