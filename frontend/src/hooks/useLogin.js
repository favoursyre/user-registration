//This handles the hooks for the login

//Libraries -->
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

//Commencing the app
export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(null);
    setError(null);

    const response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    console.log("Login JSON: ", json);

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      //Saving the user details to the local storage
      localStorage.setItem("user", JSON.stringify(json));

      //Updating the auth context
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };
  return { login, isLoading, error };
};
