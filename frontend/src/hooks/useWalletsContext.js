//This handles the wallet context

//Libraries -->
import { WalletsContext } from "../context/walletContext";
import { useContext } from "react";

//Commencing the app
export const useWalletsContext = () => {
  const context = useContext(WalletsContext);

  if (!context) {
    throw Error(
      "useWalletsContext must be used inside an WalletsContextProvider"
    );
  }

  return context;
};
