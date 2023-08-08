import React from "react";

import { Routes, Route } from "react-router-dom";

import "./App.css";

import Landpage from "./pages/Home/index";
import Register from "./pages/auth_register";
import Login from "./pages/auth_login/login_Form"; 
import CreateNote from "./pages/Notes";
import UserNotes from "./pages/SavedNotes/UserSavedNotes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landpage />} />

        {/* Auth Routes */}
        <Route path="/userregister" element={<Register />} />
        <Route path="/userlogin" element={<Login />} />

        {/* Note Routes */}
        <Route path="/createnote" element={<CreateNote />} />
        <Route path="/usernotes" element={<UserNotes />} />

        {/* User Routes */}
        <Route path="/usernote" element={<UserNotes />} />
        
      </Routes>
    </>
  );
}

export default App;
