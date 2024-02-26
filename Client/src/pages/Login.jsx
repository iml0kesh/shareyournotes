import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    userId: "",
    userEmail: "",
    userPassword: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/users/register/", {
        userName: user.userName,
        userId: user.userId,
        userEmail: user.userEmail,
        userPassword: user.userPassword,
      });

      setUser({
        userName: "",
        userId: "",
        userEmail: "",
        userPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/users/login", {
        userEmail: user.userEmail,
        userPassword: user.userPassword,
      });
      setUser({
        userEmail: "",
        userPassword: "",
      });

      const token = res.data.activeToken;
      localStorage.setItem("activeToken", token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const [isLoginActive, setIsLoginActive] = useState(true);

  const toggleForm = () => {
    setIsLoginActive(!isLoginActive); // Toggle visibility based on current state
  };

  const loginFormStyle = {
    display: isLoginActive ? "block" : "none",
  };

  const registerFormStyle = {
    display: isLoginActive ? "none" : "block",
  };

  return (
    <section className="user-auth">
      <div className="login-page" style={loginFormStyle}>
        <h2>Login</h2>
        <form onSubmit={loginSubmit} className="login-form">
          <div className="user-box">
            <input
              type="email"
              name="userEmail"
              placeholder="Email"
              required
              value={user.userEmail}
              onChange={handelChange}
            />
          </div>

          <div className="user-box">
            <input
              type="password"
              name="userPassword"
              placeholder="Password"
              required
              value={user.userPassword}
              onChange={handelChange}
            />
          </div>

          <button type="submit" className="Submit">
            Submit
          </button>

          <p className="footer">
            You don't have a account?
            <span onClick={toggleForm} className="p-span">
              {" "}
              Register now
            </span>
          </p>
        </form>
      </div>

      <div className="register-page" style={registerFormStyle}>
        <form onSubmit={registerSubmit} className="register-form">
          <h2>Register</h2>
          <div className="user-box">
            <input
              type="text"
              name="userName"
              placeholder="Name"
              required
              value={user.userName}
              onChange={handelChange}
            />
          </div>

          <div className="user-box">
            <input
              type="text"
              name="userId"
              placeholder="userId"
              required
              value={user.userId}
              onChange={handelChange}
            />
          </div>

          <div className="user-box">
            <input
              type="email"
              name="userEmail"
              placeholder="Email"
              required
              value={user.userEmail}
              onChange={handelChange}
            />
          </div>

          <div className="user-box">
            <input
              type="password"
              name="userPassword"
              placeholder="Password"
              required
              value={user.userPassword}
              onChange={handelChange}
            />
          </div>
          <button type="submit" className="Submit">
            Register
          </button>
          <p className="footer">
            You have a account?
            <span onClick={toggleForm}> Login Now! </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
