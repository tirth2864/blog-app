import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4"
    >
      <h2 className="text-xl font-bold">{blog.title}</h2>
      <p className="text-gray-600 dark:text-gray-300">
        {blog.content.substring(0, 100)}...{" "}
      </p>
      <NavLink
        to={`/blog/${blog._id}`}
        className="text-blue-500 hover:underline"
      >
        Read More
      </NavLink>
    </motion.div>
  );
};

export default BlogCard;
