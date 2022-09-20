//This handles the schema for the user biodatas

//Libraries -->
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

//Commencing the app
const Schema = mongoose.Schema;

//This is the schema for the user database
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    phoneNumber: {
      countryCode: {
        type: String,
      },
      number: {
        type: Number,
        required: true,
        unique: true,
      },
    },
    password: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    referralID: {
      type: String,
    },
    idForReferral: {
      type: String,
    },
    verification: {
      status: {
        type: Boolean,
      },
      document: {
        type: String,
      },
      image: {
        type: String,
      },
    },
    factorAuth: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

//Static signup method
userSchema.statics.signup = async function (
  firstName,
  lastName,
  displayName,
  email,
  dateOfBirth,
  phoneNumber,
  password,
  passwordCopy,
  country,
  state,
  referralID
) {
  console.log(
    "Sign Up Args: ",
    firstName,
    lastName,
    displayName,
    email,
    dateOfBirth,
    phoneNumber,
    password,
    passwordCopy,
    country,
    state,
    referralID
  );

  //Make sure to hash the necessary things, hash that need to have consistent value should not be salted
  //and hash that dont need to be consistent should be salted
  const salt = await bcrypt.genSalt(10);
  const emailHash = await bcrypt.hash(email, salt);

  //Validation of the sign up args
  if (!firstName) {
    throw Error("First Name is required");
  } else if (!lastName) {
    throw Error("Last Name is required");
  } else if (!displayName) {
    throw Error("Display Name is required");
  } else if (!email) {
    throw Error("Email Address required");
  } else if (!dateOfBirth) {
    throw Error("Date of Birth is required");
  } else if (!phoneNumber) {
    throw Error("Phone Number is required");
  } else if (!password) {
    throw Error("Password is required");
  } else if (!passwordCopy) {
    throw Error("Verify password is required");
  } else if (!country) {
    throw Error("Country is required");
  } else if (!state) {
    throw Error("State is required");
  } else if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  } else if (!validator.isStrongPassword(password)) {
    throw Error(
      "Error: Use a password > 8 characters with at least one Uppercase, Lowercase, Number and Symbol"
    );
  } else if (!referralID) {
    referralID = "null";
  }

  //Checking to see if the two passwords match
  if (password !== passwordCopy) {
    throw Error("The two password doesn't match");
  }

  //Checking to see if the email already exists
  const emailStatus = await this.findOne({ email: email });
  if (emailStatus) {
    throw Error("Email already in use");
  }

  //Generating an ID for referral for the User and other necessary details for the user database
  const idForReferral = "null";
  const verification = { status: false, document: "null", image: "null" };
  const factorAuth = false;

  //Hashing the password before pushing it to the database
  const passwordHash = await bcrypt.hash(password, salt);

  //Creating the database
  const user = await this.create({
    firstName: firstName,
    lastName: lastName,
    displayName: displayName,
    email: email,
    dateOfBirth: dateOfBirth,
    phoneNumber: phoneNumber,
    password: passwordHash,
    country: country,
    state: state,
    referralID: referralID,
    idForReferral: idForReferral,
    verification: verification,
    factorAuth: factorAuth,
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

//Static update method

//Static delete method

module.exports = mongoose.model("User", userSchema);
