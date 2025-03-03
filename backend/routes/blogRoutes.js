const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth.js");
const { createBlog, getAllBlogs, deleteBlog } = require("../controllers/blogController");

router.post("/", verifyToken, createBlog);
router.get("/", getAllBlogs);
router.delete("/:id", verifyToken, deleteBlog);

module.exports = router;
