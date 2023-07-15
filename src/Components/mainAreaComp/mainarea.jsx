import React, { useState } from "react";
import SubCompContainer from "../subCompContainer/subCompContainer";
import Sublist from "../subcomp/sublistComp";

// CSS FILES
import "./mainarea.css";

const MainArea = () => {
  const [title, setTitle] = useState();
  const [text, setText] = useState();

  const [components, setComponents] = useState([]);
  const [textComps, setTextComps] = useState([]);

  const handleAddComponent = () => {
    const newComponent = {
      id: components.length - 1,
      title: title,
    };

    setComponents([...components, newComponent]);
    setTitle();

    const newTextComp = {
      id: textComps.length - 1,
      title: title,
      text: text,
    };

    setTextComps([...textComps, newTextComp]);
    setText();
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
          <button onClick={handleAddComponent}>Add</button>
        </div>
        {components.map((component) => (
          <Sublist key={component.id} listTitle={component.title} />
        ))}
      </div>
      <div className="right-area">
        {textComps.map((text) => (
          <SubCompContainer cardTitle={text.title} cardText={text.text} />
        ))}
      </div>
    </div>
  );
};
export default MainArea;
