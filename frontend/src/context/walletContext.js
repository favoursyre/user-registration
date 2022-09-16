//This handles the context for wallets

//Libraries -->
import { createContext, useReducer } from "react";

//Commencing the app
export const WalletsContext = createContext();

//This is the functions as the wallet reducer
export const walletsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WALLETS":
      return {
        wallets: action.payload,
      };
    default:
      return state;
  }
};

export const WalletsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(walletsReducer, {
    wallets: null,
  });

  return (
    <WalletsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WalletsContext.Provider>
  );
};
