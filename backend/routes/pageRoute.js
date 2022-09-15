//This handles the various pages for the selenia

//Libraries -->
const express = require("express");
const { homePage } = require("../controllers/pageController");
const { loginPage, signupPage } = require("../controllers/userController");

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
