//This handles the wallet details

//Libraries
import { useWalletsContext } from "../hooks/useWalletsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect } from "react";

//Commencing the app
const WalletDetails = () => {
  const { dispatch } = useWalletsContext();
  //const { user } = useAuthContext();
  const user = JSON.parse(localStorage.getItem("haberAuthToken"));
  console.log("User: ", user);

  useEffect(() => {
    const fetchWallets = async () => {
      const response = await fetch("/dashboard/wallet", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      console.log("Wallet Details: ", json);

      if (response.ok) {
        dispatch({ type: "SET_WALLETS", payload: json });
      }
    };

    fetchWallets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   const handleClick = async () => {
  //     if (!user) {
  //       return;
  //     }

  //     const response = await fetch("/dashboard/wallets", {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //     });
  //     const json = await response.json();

  //     if (response.ok) {
  //       dispatch({ type: "SET_WALLETS", payload: json });
  //     }
  //   };

  return (
    <div className="workout-details">
      <h4>Wallet Details</h4>
    </div>
  );
};

export default WalletDetails;
