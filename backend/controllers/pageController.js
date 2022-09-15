//This handles the various functions for the pages

//Libraries -->
//const Page = require("../models/userModel");

//Commencing the app
// Homepage
const homePage = (req, res) => {
  try {
    view = { msg: "Homepage" };
    res.status(200).json(view);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  homePage,
};
