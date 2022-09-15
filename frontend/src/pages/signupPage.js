//This handles the signup page

//Libraries -->
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

//Commencing the app
const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();

  //This function executes when form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Signup: ", email, dateOfBirth, password);
    await signup(email, dateOfBirth, password);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Date of Birth:</label>
      <input
        type="date"
        onChange={(e) => setDateOfBirth(e.target.value)}
        value={dateOfBirth}
      />

      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading}>Sign Up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default SignupPage;
