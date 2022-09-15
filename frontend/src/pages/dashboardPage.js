//This handles the dashboard page

//Libraries -->
import { useState, useEffect } from "react";
import { useDashboard } from "../hooks/useDashboard";

//Commencing the app
console.log("Dashboard");
const DashboardPage = () => {
  const { dashboard, error, isLoading } = useDashboard();

  useEffect(() => {
    dashboard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>Dashboard Page</h2>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default DashboardPage;
