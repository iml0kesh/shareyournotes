import React from "react";

const Nav = ({ setIsLogin }) => {
  return (
    <div className="navbar">
      <div className="logo">Share Your Notes</div>
      <div className="nav">
        <ul>
          <li>
            {setIsLogin ? (
              <a href="/login">Login</a>
            ) : (
              <a href="/logout">Logout</a>
            )}
          </li>
          <li>
            <a href="/register">
              <button>Get Started</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
