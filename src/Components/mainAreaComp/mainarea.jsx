import React, { useState } from "react";
import SubCompContainer from "../subCompContainer/subCompContainer";
import Sublist from "../subcomp/sublistComp";

// CSS FILES
import "./mainarea.css";

const MainArea = () => {
  const [title, setTitle] = useState("");
  const [components, setComponents] = useState([]);
  const [selectedComponentId, setSelectedComponentId] = useState(null);

  const handleAddComponent = () => {
    const newComponent = {
      id: components.length + 1,
      title: title,
      text: "",
    };

    setComponents([...components, newComponent]);
    setTitle("");
  };

  const handleTextChange = (e, id) => {
    const updatedComponents = components.map((component) =>
      component.id === id ? { ...component, text: e.target.value } : component
    );
    setComponents(updatedComponents);
  };

  const handleClick = (id) => {
    setSelectedComponentId(id);
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
              <span class="focus-border-12"></span>
            </div>
            <div className="btn-add">
              <button onClick={handleAddComponent}>Create</button>
            </div>
          </div>
        </div>
        <div>
          <div className="sec-bottom-title">
            {/* <p>MY Scripts</p> */}
          </div>
          {components.map((component) => (
            <Sublist
              listTitle={component.title}
              id={component.id}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>

      <div className="right-area">
        {components.map((component) => (
          <div key={component.id}>
            {component.id === selectedComponentId && (
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
