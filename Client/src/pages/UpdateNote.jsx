import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export const UpdateNote = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
    id: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getNote = async () => {
      const token = localStorage.getItem("activeToken");
      if (id) {
        try {
          console.log(id);
          const res = await axios.get(`http://localhost:3001/note/${id}`, {
            headers: { activeToken: token },
          });
          setNote({
            title: res.data.title,
            content: res.data.content,
            id: res.data._id,
          });
        } catch (err) {
          console.log(err.message);
          // navigate("/");
        }
      }
    };
    getNote();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const editNote = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("activeToken");
      if (token) {
        const { title, content, id } = note;
        const newNote = {
          title,
          content,
        };
        await axios.put(`http://localhost:3001/note/edit/${id}`, newNote, {
          headers: { activeToken: token },
        });
      }

      navigate("/");
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };

  // const editNote
  return (
    <form onSubmit={editNote}>
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
              Update
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
