import React, { useState, useEffect } from "react";
import { Routes, Route, Await } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import axios from "axios";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      const token = localStorage.getItem("activeToken");
      if (token) {
        const verified = await axios.get("http://localhost:3001/users/verify", {
          headers: { Authorization: token },
        });
        setIsLogin(verified.data);
      } else {
        setIsLogin(false);
      }
    };
    checkLogin();
  }, []);

  return (
    <>
      <Nav setIsLogin={isLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
      </Routes>
    </>
  );
}

export default App;
