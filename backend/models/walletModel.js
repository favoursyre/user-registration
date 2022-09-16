//This handles the schema for the wallet datas

//Libraries -->
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

//Commencing the app
const Schema = mongoose.Schema;

//This is the schema for the user database
const walletSchema = new Schema(
  {
    currencyName: {
      type: String,
      required: true,
    },
    privateKey: {
      type: String,
      required: true,
      unique: true,
    },
    mnemonic: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//Static get all wallets method

//Static create single wallet method

//Static create wallets method

//Static update method

module.exports = mongoose.model("Wallet", walletSchema);
