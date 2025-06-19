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

  return (
    <Router>
      <Navbar
         onLoginClick={() => {
        setShowRegister(false); // hide register
        setShowLogin(true);    // show login
      }}
      onRegisterClick={() => {
        setShowLogin(false);   // hide login
        setShowRegister(true); // show register
      }}
      />

      {/* Login Modal */}
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onLogin={() => {
            setShowLogin(false);
          }}
          onSwitchToRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        />
      )}

      {/* Register Modal */}
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
