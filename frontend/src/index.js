//This handles the main react component for Haber

//Libraries -->
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WalletsContextProvider } from "./context/walletContext";
import { AuthContextProvider } from "./context/authContext";

//Commencing the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WalletsContextProvider>
        <App />
      </WalletsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
