//This handles the signup page

//Libraries -->
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

//Commencing the app
const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCopy, setPasswordCopy] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [referralID, setReferralID] = useState("");
  const { signup, isLoading, error } = useSignup();

  //This function executes when form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();

    // //Checking if the passwords match
    // if (!passwordCopy) {
    //   const errorMsg = "Verify password field is required";
    //   throw Error(errorMsg);

    // }

    console.log("Signup: ", email, dateOfBirth, password);
    await signup(
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
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>First Name:</label>
      <input
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      <br />
      <label>Last Name:</label>
      <input
        type="text"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />
      <br />
      <label>Display Name:</label>
      <input
        type="text"
        onChange={(e) => setDisplayName(e.target.value)}
        value={displayName}
      />
      <br />
      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <br />
      <label>Date of Birth:</label>
      <input
        type="date"
        onChange={(e) => setDateOfBirth(e.target.value)}
        value={dateOfBirth}
      />
      <br />
      <label>Phone Number:</label>
      <input
        type="tel"
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber}
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <br />
      <label>Verify Password:</label>
      <input
        type="password"
        onChange={(e) => setPasswordCopy(e.target.value)}
        value={passwordCopy}
      />
      <br />
      <label>Country:</label>
      <input
        type="text"
        onChange={(e) => setCountry(e.target.value)}
        value={country}
      />
      <br />
      <label>State:</label>
      <input
        type="text"
        onChange={(e) => setState(e.target.value)}
        value={state}
      />
      <br />
      <label>Referral ID:</label>
      <input
        type="text"
        onChange={(e) => setReferralID(e.target.value)}
        value={referralID}
      />
      <br />

      <button disabled={isLoading}>Sign Up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default SignupPage;
