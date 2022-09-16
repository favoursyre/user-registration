//This handles the various pages for the haber dashboard, all pages here would require user authentication

//Libraries -->
const express = require("express");
const {
  dashboardPage,
  updateWallet,
  getWallets,
  createWallet,
} = require("../controllers/dashboardController");
const requireAuth = require("../middleware/requireAuth");

//Commencing the app
const router = express.Router();

//This requires auth for all routes below
router.use(requireAuth);

//Dashboard
router.get("/dashboard", dashboardPage);

//Get all wallets
router.get("/dashboard/wallet", getWallets);

//Create a wallet
router.post("/dashboard/wallet", createWallet);

module.exports = router;
