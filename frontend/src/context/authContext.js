//This handles the context for authentication

//Libraries -->
import { createContext, useReducer, useEffect } from "react";

//Commencing the app
export const AuthContext = createContext();

//This is the functions as the authentication reducer
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

//This is the auth context provider
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  console.log("AuthContext: ", state);

  //This checks if the user data is still available in the local storage or not
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("haberAuthToken"));
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
