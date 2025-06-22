import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.png";

function Navbar({ loggedIn, username, onLoginClick, onRegisterClick, onLogoutClick }) {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="X A L O N" />
        </div>
        <div className="logo1">X A L O N</div>

        <ul className="nav-links">
          <li className="nav-links1">
            <Link to="/Home">Home</Link>
          </li>

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
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
