import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";

import UserNotes from "./pages/UserNotes/mainarea";
import Signup from "./pages/SignUP_SignIN/signup";

import "./App.css";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/userregister" element={<Login />} />
        <Route path="/usernotes" element={<UserNotes />} />
      </Routes>
    </>
  );
}

export default App;
