import React, { useState } from "react";
import axios from "axios";

const Login = ({ setIsLogin }) => {
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
      console.log(res);
      const token = res.data.activeToken;
      localStorage.setItem("activeToken", token);
      setIsLogin(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="login-page">
        <form onSubmit={loginSubmit}>
          <input
            type="email"
            name="userEmail"
            placeholder="Email"
            required
            value={user.userEmail}
            onChange={handelChange}
          />

          <input
            type="password"
            name="userPassword"
            placeholder="Password"
            required
            value={user.userPassword}
            onChange={handelChange}
          />

          <button type="submit">Login</button>
        </form>
      </div>

      <div className="register-page">
        <form onSubmit={registerSubmit}>
          <input
            type="text"
            name="userName"
            placeholder="Name"
            required
            value={user.userName}
            onChange={handelChange}
          />

          <input
            type="text"
            name="userId"
            placeholder="userId"
            required
            value={user.userId}
            onChange={handelChange}
          />

          <input
            type="email"
            name="userEmail"
            placeholder="Email"
            required
            value={user.userEmail}
            onChange={handelChange}
          />

          <input
            type="password"
            name="userPassword"
            placeholder="Password"
            required
            value={user.userPassword}
            onChange={handelChange}
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
