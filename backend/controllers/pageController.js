//This handles the various functions for the page links

//Libraries -->
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
require("dotenv").config();

//Commencing the app
const SECRET = process.env.SECRET;

//This handles the function of JWT
const createToken = (_id) => {
  return jwt.sign({ _id }, SECRET, { expiresIn: "3d" });
};

// Homepage
const homePage = (req, res) => {
  try {
    view = { msg: "Homepage" };
    res.status(200).json(view);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Login Page
const loginPage = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Signup page
const signupPage = async (req, res) => {
  const { email, dateOfBirth, password } = req.body;
  try {
    const user = await User.signup(email, dateOfBirth, password);
    const token = createToken(user._id);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  homePage,
  loginPage,
  signupPage,
};
