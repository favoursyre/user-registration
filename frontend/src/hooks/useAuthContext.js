//This handles the auth context hook

//Libraries -->
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

//Commencing the app
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("useAuthContext must be used inside an AuthContextProvider");
  }
  return context;
};
