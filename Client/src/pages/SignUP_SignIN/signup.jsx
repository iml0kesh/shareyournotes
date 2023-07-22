import React, { useState } from "react";

import User from "./usercomp";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [users, setUsers] = useState([]);

  const createUser = () => {
    const newUser = {
      UserName: userName,
      Userid: userId,
      UserEmail: userEmail,
      UserPassword: userPassword,
    };
    setUsers([...users, newUser]);
    setUserName("");
    setUserId("");
    setUserEmail("");
    setUserPassword("");
  };

  return (
    <>
      <form action="/signup">
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
        <button onClick={createUser}>Create</button>
      </form>
      <div>
        {users.map((user) => {
          <User
            UserName={user.userName}
            UserId={user.userId}
            UserEmail={user.userEmail}
            UserPassword={user.userPassword}
          />;
        })}
      </div>
    </>
  );
};

export default Signup;
