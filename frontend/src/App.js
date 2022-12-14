//This handles the client side for Haber

//Libraries -->
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";
import DashboardPage from "./pages/dashboardPage";
import Navbar from "./components/Navbar";

//Commencing the app
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
