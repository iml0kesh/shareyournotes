import React, { useState } from "react";
import SubCompContainer from "../subCompContainer/subCompContainer";
import Sublist from "../subcomp/sublistComp";

// CSS FILES
import "./mainarea.css";

const MainArea = () => {
  const [title, setTitle] = useState("");
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const [components, setComponents] = useState([]);

  const CreateNoteComponent = () => {
    const newNote = {
      id: components.length + 1,
      title: title,
      text: "",
    };

    setComponents([...components, newNote]);
    setTitle("");
  };

  const handleTextChange = (e, id) => {
    const updatedComponents = components.map((component) =>
      component.id === id ? { ...component, text: e.target.value } : component
    );
    setComponents(updatedComponents);
  };

  const openNote = (id) => {
    setSelectedNoteId(id);
  };

  return (
    <div className="main-area">
      <div className="sidebar-left">
        <div className="top-add-sec">
          <div className="add-sec">
            <div>
              <p>My Scripts</p>
            </div>
            <div className="input-box">
              <input
                class="textbox-title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              />
            </div>
            <div className="btn-add">
              <button onClick={CreateNoteComponent}>Create</button>
            </div>
          </div>
        </div>
        <div>
          <div className="sec-bottom-title"></div>
          {/* Rendring all the notes */}
          {components.map((component) => (
            <Sublist
              listTitle={component.title}
              id={component.id}
              // This handleClick will render the correspoinding Text area. 
              handleClick={openNote} 
            />
          ))}
        </div>
      </div>

      <div className="right-area">
        {components.map((component) => (
          <div>
            {component.id === selectedNoteId && (
              <SubCompContainer
                cardTitle={component.title}
                cardText={component.text}
                handleTextChange={(e) => handleTextChange(e, component.id)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainArea;
