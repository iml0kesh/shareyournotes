import React, { useState } from "react";

const SubCompContainer = ({ cardTitle, cardText, handleTextChange }) => {
  return (
    <div>
      <div>
        <p>{cardTitle}</p>{" "}
      </div>
      <br />
      <div className="col-13">
        <textarea
          rows="23"
          cols="128"
          className="textbox-13"
          type="text"
          placeholder="Start Typing Bro...."
          value={cardText}
          onChange={handleTextChange}
        />
      </div>
      <div className="btns">
        <ul>
          <li>
            <button className="btn-submit">Save</button>
          </li>
          <li>
            <button className="btn-delete">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubCompContainer;
