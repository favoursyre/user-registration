//This handles the hooks for the logout

//Libraries -->
import { useAuthContext } from "./useAuthContext";

//Commencing the app
export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    //Removing user from storage
    localStorage.removeItem("user");

    //dispatch logout action
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};
