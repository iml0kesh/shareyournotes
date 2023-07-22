import React from "react";

const UserComp = (props) => {
  return (
    <>
      <h1>{props.UserName}</h1>
      <h2>{props.UserId}</h2>
      <h3>{props.UserEmail}</h3>
      <h4>{props.UserPassword}</h4>
    </>
  );
};

export default UserComp;
