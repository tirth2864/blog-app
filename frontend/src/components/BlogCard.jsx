import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${blog._id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 cursor-pointer"
    >
      <h2 className="text-xl font-bold">{blog.title}</h2>
      <p className="text-gray-600 dark:text-gray-300">
        {blog.content.substring(0, 100)}...{" "}
      </p>
    </motion.div>
  );
};

export default BlogCard;
