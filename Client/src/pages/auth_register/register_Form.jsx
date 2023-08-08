import React, { useState } from "react";

const RegForm = () => {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleUserId = (e) => {
    setUserId(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  async function postRegister(url = "", data = {}) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !userId || !email || !password) {
      alert("Bro give all fields");
    } else {
      postRegister("http://localhost:3001/auth/userregister", {
        userName: name,
        userId: userId,
        userEmail: email,
        userPassword: password,
      }).then((data) => {
        console.log(data);
      });
    }
  };

  return (
    <div className="reg-body">
      <form className="reg-form">
        <h1>Register Bro</h1>
        <br />
        <label className="reg-form-label">Name</label>
        <input
          className="reg-input"
          type="text"
          placeholder="name"
          onChange={handleName}
        />

        <label className="reg-form-label">Userid</label>
        <input
          className="reg-input"
          type="text"
          placeholder="userid"
          onChange={handleUserId}
        />

        <label className="reg-form-label">Email</label>
        <input
          className="reg-input"
          type="text"
          placeholder="email"
          onChange={handleEmail}
        />

        <label className="reg-form-label">Password</label>
        <input
          className="reg-input"
          type="text"
          placeholder="password"
          onChange={handlePassword}
        />

        <button className="reg-submit-btn" type="submit" onClick={handleSubmit}>
          create
        </button>
      </form>
    </div>
  );
};

export default RegForm;
