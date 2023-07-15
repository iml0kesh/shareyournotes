import React from "react";
import "./addNote.css";

const addNote = () => {
  return (
    <div className="user-area">
      {/* Left Area */}
      <div className="left-area">
        <div className="Sub-box">
          <ul>
            <li>title</li>
          </ul>
        </div>
      </div>

      {/* Right Area */}
      <div className="right-area">
        <form action="">
          <div className="label-1">
            {/* <label>Just Start Typing...</label> */}
          </div>
          <div class="col-12">
            <input class="textbox-12" type="text" placeholder="Title" />
            <span class="focus-border-12"></span>
          </div>
          <br></br>
          <div class="col-13">
            <textarea
              rows="23"
              cols="128"
              className="textbox-13"
              type="text"
              placeholder="Start Typing Bro...."
            />
          </div>
          <div className="btns">
            <ul>
              <li>
                <button class="btn-submit">Save</button>
              </li>
              <li>
                <button className="btn-delete">Delete</button>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default addNote;
