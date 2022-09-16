//This handles the various functions for the dashboard pages

//Libraries -->
const Wallet = require("../models/walletModel");
const mongoose = require("mongoose");

//Commencing the app
//Dashboard page
const dashboardPage = (req, res) => {
  try {
    view = { msg: "Dashboard Page" };
    res.status(200).json({ view });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get all wallets
const getWallets = async (req, res) => {
  const user_id = req.user._id;
  try {
    const walletDatas = await Wallet.find({ user_id });
    res.status(200).json(walletDatas);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//create a wallet
const createWallet = async (req, res) => {
  const { currencyName, privateKey, mnemonic } = req.body;
  const user_id = req.user._id; //Getting the user id of the logged account

  //Checking for empty fields
  //Handle this error better, all fields should have personal filters
  let emptyFields = [];

  if (!currencyName) {
    return res
      .status(400)
      .json({ error: 'Please fill in "Currency Name" field' });
  }
  if (!privateKey) {
    emptyFields.push("private key");
  }
  if (!mnemonic) {
    emptyFields.push("mnemonic");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  //Adding wallet doc to database
  try {
    const walletDatas = await Wallet.create({
      currencyName,
      privateKey,
      mnemonic,
      user_id,
    });
    res.status(200).json(walletDatas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//update a wallet
const updateWallet = async (req, res) => {
  //const id
};

module.exports = {
  dashboardPage,
  getWallets,
  createWallet,
  updateWallet,
};
