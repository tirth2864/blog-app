import React from "react";

const BlogCard = ({ blog, currentUserId, onDelete }) => {
  const { _id, title, content, tags, author } = blog;

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      onDelete(_id);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold mb-2 dark:text-white">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-2">{content}</p>
      {tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-500 text-white text-sm px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        Author: {author?.username || "Unknown"}
      </p>
      {currentUserId === author?._id && (
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default BlogCard;
