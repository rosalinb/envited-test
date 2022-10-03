import React from "react";
import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateEvent from "./pages/Event/CreateEvent/CreateEvent";
import ShowEvent from "./pages/Event/ShowEvent/ShowEvent";
import HomeMobile from "./pages/Home/HomeMobile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeMobile />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/event" element={<ShowEvent />} />
      </Routes>
    </div>
  );
}

export default App;
