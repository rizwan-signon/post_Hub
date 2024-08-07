import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res, next) => {
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

export const logInUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const validUser = await User.findOne({ email });
    const validPass = bcryptjs.compareSync(password, validUser.password);
    if (!validUser || !validPass) throw new Error("wrong credentails");
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });
    res
      .cookie("jwt", token, {
        maxAge: 60 * 60 * 1 * 24 * 3 * 1000,
        httpOnly: true,
      })
      .status(200)
      .json(validUser);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    if (req.user.id !== req.params.id)
      throw new Error("you can update your own account");
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          userName: req.body.userName,
          email: req.body.email,
          password: bcryptjs.hashSync(req.body.password, 10),
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
