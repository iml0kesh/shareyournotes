import React from "react";
import "./sublistcard.css";

const Sublist = ({ listTitle, id, handleClick }) => {
  return (
    <div className="ListCard-div">
      <div className="ListCard">
        <button className="btn-sublist" onClick={() => handleClick(id)}>
          {listTitle}
        </button>
      </div>
    </div>
  );
};

export default Sublist;
