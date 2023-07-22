import { Routes, Route } from "react-router-dom";

import LandPage from "./pages/Home/landPage";
import UserNotes from "./pages/UserNotes/mainarea";
import Signup from "./pages/SignUP_SignIN/signup";
// import Signin from "./pages/SignUP_SignIN/signin";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/usernotes" element={<UserNotes />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
