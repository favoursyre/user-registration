//This handles the various pages for the selenia dashboard

//Libraries -->
const express = require("express");
const { dashboardPage } = require("../controllers/dashboardController");
const requireAuth = require("../middleware/requireAuth");

//Commencing the app
const router = express.Router();

//This requires auth for all routes below
router.use(requireAuth);

//Dashboard
router.get("/dashboard", dashboardPage);

module.exports = router;
