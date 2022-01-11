import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Issues from "./components/Issues";
import NavBar from "./components/Navbar";
import NoPage from "./components/NoPage";
import Requests from "./components/Requests";
import Support from "./components/Support";
import logo from "./icons/logo.png";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar logoLink={logo} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
