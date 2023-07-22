import React, { useState } from "react";
import User from "./usercomp";
// import { response } from "express";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [users, setUsers] = useState([]);

  const createUser = (e) => {
    e.preventDefault();
    const newUser = {
      userName: userName,
      userId: userId,
      userEmail: userEmail,
      userPassword: userPassword,
    };

    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("user saved success: ", data);
      })
      .catch((err) => {
        console.error("Error", err);
      });

    setUsers([...users, newUser]);
    setUserName("");
    setUserId("");
    setUserEmail("");
    setUserPassword("");
  };

  return (
    <>
      <form onSubmit={createUser} action="/signup">
        <input
          type="text"
          name="user-name"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          name="user-id"
          onChange={(e) => setUserId(e.target.value)}
          placeholder="UserId"
        />
        <input
          type="text"
          name="user-email"
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          name="user-password"
          onChange={(e) => setUserPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Create</button>
      </form>
      <div>
        {users.map((user, index) => (
          <User
            key={index}
            userName={user.userName}
            userId={user.userId}
            userEmail={user.userEmail}
            userPassword={user.userPassword}
          />
        ))}
      </div>
    </>
  );
};

export default Signup;
