import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen dark:bg-gray-900">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
