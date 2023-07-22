import React from "react";

const UserComp = ({ userName, userId, userEmail, userPassword }) => {
  return (
    <div>
      <p>Name: {userName}</p>
      <p>User ID: {userId}</p>
      <p>Email: {userEmail}</p>
      <p>Password: {userPassword}</p>
    </div>
  );
};

export default UserComp;
