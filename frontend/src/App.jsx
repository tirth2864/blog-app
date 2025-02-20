import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import Sidebar from "./pages/Sidebar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen dark:bg-gray-900">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-4 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/blog/:id" element={<Blog />} />
            </Routes>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </Router>
  );
};

export default App;
