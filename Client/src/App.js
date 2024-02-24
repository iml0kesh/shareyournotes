import React, { useState, useEffect } from "react";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import "./App.css";

import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";

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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home isLogin={isLogin} setIsLogin={setIsLogin} />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
