const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db");
const postController = require("./controllers/Posts.js");

//connecting server to database
connectDB();

const app = express();

app.use(bodyParser.json());

//routes
app.get("/posts", postController.getAllPosts);
app.get("/posts/search", postController.searchPosts);
app.get("/posts/filter/:tagId", postController.filterPostsByTag);

app.listen(4000, (req, res) => {
  console.log("server is running at port 4000");
});
