import React from "react";

const header = () => {
  return (
    <div className="navbar">
      <div className="logo">Share Your Notes</div>
      <div className="nav">
        <ul>
          <li>
            <a href="">Subjects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>About Us</li>
          <li>
            <a href="/userlogin">Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default header;
