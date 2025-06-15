import {Link} from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/logo.png'
function Navbar(){
  return(
    <>
    <header class="header">
      <nav class="navbar">
        <div className='logo'>
          <img src={logo} alt="X A L O N" />
        </div>
      <div className='logo1'>X A L O N</div>
   <ul class="nav-links">
    <li class="nav-links1"><Link to="/Login">Login</Link></li>
    <li class="nav-links1"><Link to="/Register">Register</Link></li>
    <li class="nav-links1"><Link to="/Admin">Admin</Link></li>
    <li class="nav-links1"><Link to="/contact">Contact</Link></li>
   </ul>
   </nav>
   </header>
    </>
  );
}
export default Navbar;