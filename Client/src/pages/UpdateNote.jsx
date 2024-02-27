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
    const token = localStorage.getItem("activeToken");
    if (id) {
      try {
      } catch (error) {
        console.log(error);
      }
    }
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  // const editNote
  return (
    <form>
      <div className="overlay">
        <div className="overlay-content">
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
          <button type="submit" className="note-save">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
