import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({ userN, setMyNotes }) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem("activeToken");
      token ? setIsLogin(true) : setIsLogin(false);
    };
    checkLogin();
  }, []);

  const logoutSubmit = () => {
    window.location.reload();
    localStorage.clear();
    setIsLogin(false);
  };

  return (
    <div className="navbar">
      <div className="logo">Share Your Notes</div>
      <div className="nav">
        <ul>
          <li>
            <p onClick={() => setMyNotes((prevView) => !prevView)}>
              {userN ? "All Notes" : "My Notes"}
            </p>
          </li>
          <li onClick={logoutSubmit}>
            {isLogin ? (
              <Link to="/">Logout</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
