//This handles the various pages for the haber

//Libraries -->
const express = require("express");
const {
  homePage,
  loginPage,
  signupPage,
} = require("../controllers/pageController");

//Commencing the app
const router = express.Router();

//Homepage
router.get("/", homePage);

//About route

//Contact-Us route

//Login route
router.post("/login", loginPage);

//Signup route
router.post("/signup", signupPage);

//Documentation route

//Terms of services route

//Privacy Policy route

//Customer protection route

module.exports = router;
