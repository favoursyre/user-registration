//This handles the hooks for the sign up

//Libraries -->
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

//Commencing the app
export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, dateOfBirth, password) => {
    setIsLoading(null);
    setError(null);

    const response = await fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, dateOfBirth, password }),
    });
    const json = await response.json();
    console.log("SignUp JSON: ", json);

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      //Saving the user details to the local storage
      localStorage.setItem("seleniaAuthToken", JSON.stringify(json));

      //Updating the auth context
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };
  return { signup, isLoading, error };
};
