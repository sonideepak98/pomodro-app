import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

import { auth } from "./firebase";
import Timer from "./components/Timer/Timer";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pomo" element={<Timer />} />
          {/* <Route path="/" element={<Home name={userName} />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
