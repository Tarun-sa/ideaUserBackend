const { Post } = require("../models/Post.js");

// Get all posts with filter, sort, and pagination
const getAllPosts = async (req, res) => {
  const { page, pageLimit } = req.body;

  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Search for keywords in the title and description
const searchPosts = async (req, res) => {
  const { titleKeyword, descriptionKeyword } = req.body;

  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Filter posts by tags
const filterPostsByTag = async (req, res) => {
  const { tagId } = req.params;

  try {
    const posts = await Post.find({ tags: tagId }).populate("tags");
    res.status("200").json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllPosts,
  searchPosts,
  filterPostsByTag,
};
