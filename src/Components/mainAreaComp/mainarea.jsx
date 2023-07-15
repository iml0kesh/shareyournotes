import React, { useState } from "react";
import SubCompContainer from "../subCompContainer/subCompContainer";
import Sublist from "../subcomp/sublistComp";

// CSS FILES
import "./mainarea.css";

const MainArea = () => {
  const [state, setState] = useState({ name: "john", age: 30 });
  
  return (
    <div className="main-area">
      <div className="sidebar-left">
        <div className="btn-add">
          <p>Notes</p>
          <button>Add</button> 
        </div>
      </div>
      <div className="right-area">
        <SubCompContainer />
      </div>
    </div>
  );
};

export default MainArea;
