import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-60 bg-white dark:bg-gray-700 shadow-lg sticky top-0 left-0 flex flex-col h-screen">
      <div className="p-4 flex-1">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
          Menu
        </h2>
        <ul className="space-y-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/create"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
              }
            >
              Create Blog
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
              }
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
              }
            >
              Logout
            </NavLink>
          </li>
        </ul>
        <div className="mt-4"></div>
      </div>
    </div>
  );
};

export default Sidebar;
