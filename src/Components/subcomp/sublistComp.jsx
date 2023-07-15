import React from "react";
import "./sublistcard.css";

const Sublist = (props) => {
  let title = props.listTitle;
  return (
    <div className="ListCard-div">
      <div className="ListCard">
        <button className="btn-sublist">
          {title}
        </button>
      </div>
    </div>
  );
};

export default Sublist;
