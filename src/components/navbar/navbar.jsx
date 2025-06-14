import react from 'react';
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
    <li class="nav-links1">Login</li>
    <li class="nav-links1">Register</li>
    <li class="nav-links1">Admin</li>
   </ul>
   </nav>
   </header>
    </>
  )
}
export default Navbar;