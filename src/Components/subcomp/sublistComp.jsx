import React from "react";
import "./sublistcard.css";

const Sublist = (props) => {
  const title = props.sub.title;
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
