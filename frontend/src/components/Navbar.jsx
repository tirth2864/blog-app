import React from "react";
import { NavLink, BrowserRouter } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink
          to="/"
          className="text-xl font-bold text-gray-800 dark:text-white"
        >
          My Blog
        </NavLink>
        <div className="flex items-center gap-4">
          <NavLink to="/login" className="dark:text-white">
            Login
          </NavLink>
          <NavLink to="/register" className="dark:text-white">
            Register
          </NavLink>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
