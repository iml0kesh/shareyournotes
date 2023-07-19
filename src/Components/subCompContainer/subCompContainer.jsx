import React, { useState } from "react";

import "./subCompContainer.css";

const SubCompContainer = ({ cardTitle, cardText, handleTextChange }) => {
  return (
    <div className="right-view">
      <div className="view-section-right">
        <div className="title-container">
          <div className="right-title">
            <p className="right-title-p">{cardTitle}</p>
          </div>
        </div>
        <div className="text-container">
          <div className="text-data">
            <textarea
              rows="24"
              className="textbox-data"
              type="text"
              placeholder="Start Typing Bro...."
              value={cardText}
              onChange={handleTextChange}
            />
          </div>
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
    </div>
  );
};

export default SubCompContainer;
