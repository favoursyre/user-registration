//This handles the hooks for the sign up

//Libraries -->
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

//Commencing the app
export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  //This collects the sign up details and sends it to the backend
  //in other to be added to the database
  const signup = async (
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
  ) => {
    setIsLoading(null);
    setError(null);

    const response = await fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
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
        referralID,
      }),
    });
    const json = await response.json();
    console.log("SignUp JSON: ", json);

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      //Saving the user details to the local storage
      localStorage.setItem("haberAuthToken", JSON.stringify(json));

      //Updating the auth context
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };
  return { signup, isLoading, error };
};
