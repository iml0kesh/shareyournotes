import React from "react";

import { Routes, Route } from "react-router-dom";

import "./App.css";

import Landpage from "./pages/Home/landPage";
import Register from "./pages/auth_register";
import Login from "./pages/auth_login/login_Form";
import Main from "./pages/UserNotes/mainarea";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landpage />} />

        {/* Auth Routes */}
        <Route path="/user_register" element={<Register />} />
        <Route path="/user_login" element={<Login />} />

        <Route path="/post_note" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
