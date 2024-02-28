import React, { useState, useEffect } from "react";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import "./App.css";

import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { CreateNote } from "./pages/CreateNote";
import { UpdateNote } from "./pages/UpdateNote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/edit/:id" element={<UpdateNote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
