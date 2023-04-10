import User from "../models/User.js";
import bcrypt from "bcrypt";
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(200).send("new user created");
  } catch (error) {
    next(error);
  }
};
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
   
    if (!user) return next(createError(404, "user not found"));
    const inputPassword = req.body.password;

    const isPasswordCorrect = await bcrypt.compare(
      inputPassword,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(404, "wrong password or username"));
   const {password, isAdmin, ...otherDetails} = user._doc
    res.status(200).json(...otherDetails);
  } catch (error) {
    next(error);
  }
};
