//This handles the navbar

//Libraries -->
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

//Commencing the app
const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Haber</h1>
        </Link>
        <nav>
          {/* This checks if the user is logged in or not */}
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <a href="/login">
                <button>Login</button>
              </a>
              <a href="/signup">
                <button>Signup</button>
              </a>
              {/* <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link> */}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
