// src/App.js
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
import Register from "./components/auth/register/register.jsx";
import Contact from "./components/contact/contact.jsx";
import BookPage from "./components/book/book.jsx";
import MyAppointments from "./components/appointments/appointments.jsx";
import AdminLogin from "./components/admin/admin.jsx";
import AdminDashboard from "./components/admin/adminDashboard.jsx";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("username"));
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [userType, setUserType] = useState(localStorage.getItem("userType") || "user");

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setUserType("");
    localStorage.removeItem("username");
    localStorage.removeItem("userType");
  };

  return (
    <Router>
      <Navbar
        loggedIn={loggedIn}
        username={username}
        userType={userType}
        onLoginClick={() => {
          setShowRegister(false);
          setShowLogin(true);
        }}
        onRegisterClick={() => {
          setShowLogin(false);
          setShowRegister(true);
        }}
        onLogoutClick={handleLogout}
      />

      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onLogin={(user) => {
            setLoggedIn(true);
            setUsername(user);
            setUserType("user");
            localStorage.setItem("username", user);
            localStorage.setItem("userType", "user");
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
        <Route path="/" element={<Home loggedIn={loggedIn} onLoginClick={() => setShowLogin(true)} />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/book" element={loggedIn ? <BookPage username={username} /> : <Navigate to="/" />} />
        <Route path="/myappointments" element={loggedIn && userType === "user" ? <MyAppointments username={username} /> : <Navigate to="/" />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin onAdminLogin={(user, type) => {
          setLoggedIn(true);
          setUsername(user);
          setUserType(type);
          localStorage.setItem("username", user);
          localStorage.setItem("userType", type);
        }} />} />
        <Route path="/admin/dashboard" element={loggedIn && userType === "admin" ? <AdminDashboard /> : <Navigate to="/admin" />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;