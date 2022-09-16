//This handles the dashboard page

//Libraries -->
import { useState, useEffect } from "react";
import { useDashboard } from "../hooks/useDashboard";
import { useWalletsContext } from "../hooks/useWalletsContext";
import WalletDetails from "../components/walletDetails";

//Commencing the app
console.log("Dashboard");
const DashboardPage = () => {
  const { dashboard, error, isLoading } = useDashboard();
  const { wallets, dispatch } = useWalletsContext();
  //console.log("Wallet: ", wallets);

  useEffect(() => {
    dashboard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>Dashboard Page</h2>
      <div>
        <h4>Wallet</h4>
      </div>
      <WalletDetails />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default DashboardPage;
