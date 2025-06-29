import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./navbar.css";
import logo from "../../assets/logo.png";

function Navbar({
  loggedIn,
  username,
  userType,
  onLoginClick,
  onLogoutClick,
}) {
  const navigate = useNavigate();

  const handleProtectedNav = (path) => {
    if (loggedIn && userType === "user") {
      navigate(path);
    } else {
      onLoginClick();
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="X A L O N" />
        </div>
        <div className="logo1">X A L O N</div>

        <ul className="nav-links">
          {userType === "user" && (
            <button
              className="nav-button"
              onClick={() => handleProtectedNav("/myappointments")}
            >
              My Appointments
            </button>
          )}

          {!loggedIn && (
            <>
              <button onClick={onLoginClick}>Login/Signup</button>
              <li className="nav-links1">
                <Link to="/admin">Admin</Link>
              </li>
              <Link to="/home">
                <FaHome className="icon" />
              </Link>
            </>
          )}

          {loggedIn && userType === "user" && (
            <>
              <button onClick={onLogoutClick}>Logout</button>
              <li className="nav-links1 username">Hi, {username}</li>
              <Link to="/home">
                <FaHome className="icon" />
              </Link>
            </>
          )}

          {loggedIn && userType === "admin" && (
            <>
              <button onClick={onLogoutClick}>Logout</button>
              <li className="nav-links1">
                <Link to="/admin/dashboard">Dashboard</Link>
              </li>
              <Link to="/home">
                <FaHome className="icon" />
            </Link>
            </>
          )}
          <li className="nav-links1">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
