import React from "react";
import "./sublistcard.css";

const Sublist = ({ listTitle, handleClick }) => {
  return (
    <div className="ListCard-div">
      <div className="ListCard">
        <button className="btn-sublist" onClick={handleClick}>
          {listTitle}
        </button>
      </div>
    </div>
  );
};


export default Sublist;
