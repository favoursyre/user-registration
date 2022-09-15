//This acts a middleware for only showing some specified routes to authenticated users

//Libraries -->
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
require("dotenv").config();

//Commencing the app
const SECRET = process.env.SECRET;
//console.log("test");
//This funtion handles the requiring of authentication
const requireAuth = async (req, res, next) => {
  //Verify authentication
  const { authorization } = req.headers;
  console.log("Authorization: ", authorization);

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, SECRET);
    req.user = await User.findOne({ _id }).select("_id");
    console.log("Req User: ", req.user);
    next();
  } catch (error) {
    console.log("Require Auth error: ", error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;
