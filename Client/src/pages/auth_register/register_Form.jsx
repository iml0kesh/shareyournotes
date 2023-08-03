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
    <div>
      <h1>This is form</h1>

      <form>
        <label>Name</label>
        <input type="text" placeholder="name" onChange={handleName} />

        <label>Userid</label>
        <input type="text" placeholder="userid" onChange={handleUserId} />

        <label>Email</label>
        <input type="text" placeholder="email" onChange={handleEmail} />

        <label>Password</label>
        <input type="text" placeholder="password" onChange={handlePassword} />

        <button type="submit" onClick={handleSubmit}>
          create
        </button>
      </form>
    </div>
  );
};

export default RegForm;
