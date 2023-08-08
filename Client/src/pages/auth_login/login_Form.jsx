import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  async function postLogin(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  const handleChange = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Bro give all fields");
    } else {
      postLogin("http://localhost:3001/auth/userlogin", {
        userEmail: email,
        userPassword: password,
      }).then((data) => {
        console.log(data);
      });
    }
  };

  return (
    <div className="log-body">
      <form className="log-form">
        <h1>BRO Login</h1>
        <br />
        <label className="log-form-label">Email</label>
        <input
          className="log-input"
          type="text"
          placeholder="email"
          onChange={handleEmail}
        />

        <label className="log-form-label">password</label>
        <input
          className="log-input"
          type="text"
          placeholder="password"
          onChange={handlePassword}
        />

        <button className="log-submit-btn" onClick={handleChange}> Login </button>
      </form>
    </div>
  );
};

export default LoginForm;
