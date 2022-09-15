//This handles the schema for the user biodatas

//Libraries -->
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const { options } = require("../routes/pageRoute");

//Commencing the app
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//Static signup method
userSchema.statics.signup = async function (email, dateOfBirth, password) {
  console.log("Args: ", email, dateOfBirth, password);

  //Make sure to hash the necessary things, hash that need to have consistent value should not be salted
  //and hash that dont need to be consistent should be salted
  const salt = await bcrypt.genSalt(10);
  const emailHash = await bcrypt.hash(email, salt);

  //Validation of args
  if (!email || !dateOfBirth || !password) {
    throw Error("All fields are required");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  //Checking to see if the email already exists
  const emailStatus = await this.findOne({ email: email });
  if (emailStatus) {
    throw Error("Email already in use");
  }
  const passwordHash = await bcrypt.hash(password, salt);
  const user = await this.create({
    email: email,
    dateOfBirth: dateOfBirth,
    password: passwordHash,
  });
  return user;
};

//Static login method
userSchema.statics.login = async function (email, password) {
  //Validation of args
  if (!email || !password) {
    throw Error("All fields are required");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  const passwordStatus = await bcrypt.compare(password, user.password);
  if (!passwordStatus) {
    throw Error("Incorrect password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
