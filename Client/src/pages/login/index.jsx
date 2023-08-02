import React, { useEffect, useState } from "react";
import Form from "./form";

const Login = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("http://localhost:3001/home")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <>login</>
      <div>{data.name}</div>
      <div>{data.age}</div>
      {/* <Form /> */}
    </>
  );
};

export default Login;
