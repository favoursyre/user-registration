//This handles the hooks for the dashboard

//Libraries -->
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

//Commencing the app
export const useDashboard = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const dashboard = async () => {
    setIsLoading(null);
    setError(null);

    const token = JSON.parse(localStorage.getItem("seleniaAuthToken"));
    const response = await fetch("/dashboard", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
    });
    const json = await response.json();
    console.log("Dashboard Json: ", json);
    console.log("Status: ", response.ok);

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      //     //Saving the user details to the local storage
      //     localStorage.setItem("user", JSON.stringify(json));

      //     //Updating the auth context
      //     dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };
  return { dashboard, isLoading, error };
};
