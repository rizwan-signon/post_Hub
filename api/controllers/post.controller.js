import Post from "../models/post.model.js";
//get all users
export const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

export const createPost = async (req, res, next) => {
  const { title, description, author } = req.body;
  try {
    const newPost = new Post({ title, description, author });
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    next(error);
  }
};
