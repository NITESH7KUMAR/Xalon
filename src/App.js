import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Navbar from "./components/navbar/navbar.jsx";
import Home from "./components/home/home.jsx";
import Login from "./components/auth/login/login.jsx";
import Contact from "./components/contact/contact.jsx";
import Register from "./components/auth/register/register.jsx";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <Router>
      <Navbar
        loggedIn={loggedIn}
        username={username}
        onLoginClick={() => {
          setShowRegister(false);
          setShowLogin(true);
        }}
        onRegisterClick={() => {
          setShowLogin(false);
          setShowRegister(true);
        }}
        onLogoutClick={() => {
          setLoggedIn(false);
          setUsername("");
          localStorage.removeItem("username");
        }}
      />

      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onLogin={(user) => {
            setLoggedIn(true);
            setUsername(user);
            setShowLogin(false);
          }}
          onSwitchToRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        />
      )}

      {showRegister && (
        <Register
          onClose={() => setShowRegister(false)}
          onSwitchToLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;