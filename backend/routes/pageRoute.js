//This handles the various pages for the selenia

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

//About page

//Contact us page

//Login route
router.post("/login", loginPage);

//Signup route
router.post("/signup", signupPage);

//Verification
//router.post("/verification", verificationPage);

module.exports = router;
