import React, { useState } from "react";
import SubCompContainer from "../subCompContainer/subCompContainer";
import Sublist from "../subcomp/sublistComp";

// CSS FILES
import "./mainarea.css";

const MainArea = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [components, setComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleAddComponent = () => {
    const newComponent = {
      id: components.length + 1,
      title: title,
      text: text,
    };

    setComponents([...components, newComponent]);
    setTitle("");
    setText("");
  };

  return (
    <div className="main-area">
      <div className="sidebar-left">
        <div className="btn-add">
          <p>New</p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleAddComponent}>Add</button>
        </div>
        {components.map((component) => (
          <Sublist
            key={component.id}
            listTitle={component.title}
            handleClick={() => setSelectedComponent(component)}
          />
        ))}
      </div>
      <div className="right-area">
        {components.map((component) => (
          <div key={component.id}>
            {selectedComponent && selectedComponent.id === component.id && (
              <SubCompContainer
                cardTitle={component.title}
                cardText={component.text}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainArea;
