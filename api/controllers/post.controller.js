import Post from "../models/post.model.js";
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
