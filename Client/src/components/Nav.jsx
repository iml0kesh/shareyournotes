import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ isLogin, setIsLogin }) => {
  // console.log({ isLogin, setIsLogin });
  return (
    <div className="navbar">
      <div className="logo">Share Your Notes</div>
      <div className="nav">
        <ul>
          <li>
            {isLogin ? (
              <Link to="/logout">Logout</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
          <li>
            <Link to="/usernotes">My Notes</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
