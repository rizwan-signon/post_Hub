import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
export const RegisterUser = async (req, res, next) => {
  const { userName, email, password } = req.body;
  try {
    if (!userName || !email || !password)
      throw new Error("all fields are required");
    const user = new User({
      userName,
      email,
      password: bcryptjs.hashSync(password, 10),
    });
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
