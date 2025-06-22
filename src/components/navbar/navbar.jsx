import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./navbar.css";
import logo from "../../assets/logo.png";

function Navbar({
  loggedIn,
  username,
  onLoginClick,
  onRegisterClick,
  onLogoutClick,
}) {
  const navigate = useNavigate();

  const handleProtectedNav = (path) => {
    if (loggedIn) {
      navigate(path);
    } else {
      onLoginClick(); // Show login modal
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
          <button
            className="nav-button"
            onClick={() => handleProtectedNav("/myappointments")}
          >
            My Appointments
          </button>

          {!loggedIn ? (
            <>
              <button onClick={onLoginClick}>Login</button>
              <button onClick={onRegisterClick}>Register</button>
              <li className="nav-links1">
                <Link to="/Admin">Admin</Link>
              </li>
            </>
          ) : (
            <>
              <button onClick={onLogoutClick}>Logout</button>
              <li className="nav-links1 username">Hi, {username}</li>
            </>
          )}

          <li className="nav-links1">
            <Link to="/contact">Contact</Link>
          </li>
            <Link to="/Home">
              <FaHome className="icon" />
            </Link> 

        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
