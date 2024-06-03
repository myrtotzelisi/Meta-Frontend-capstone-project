import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../assets/Logo .svg'
import icon from '../assets/hamburger_button_menu_icon_155296.png'
import '../styles/Nav.css'

function Navbar() {

    const [openLinks, setOpenLinks]=useState(false);
    const toggleNavbar = ()=> {
        setOpenLinks(!openLinks);
    }

  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks? "open": "close"}>
            <img src={logo} alt=''/>
            <div className='hiddenLinks'>
            <Link to='/' id='hiddenLink'>Home</Link>
            <Link to='/about' id='hiddenLink'>About</Link>
            <Link to='/' id='hiddenLink'>Menu</Link>
            <Link to='/reservations' id='hiddenLink'>Reservations</Link>
            <Link to='/' id='hiddenLink'>Order Online</Link>
            <Link to='/' id='hiddenLink'>Login</Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to='/' id='hiddenLink'>Home</Link>
            <Link to='/about' id='hiddenLink'>About</Link>
            <Link to='/' id='hiddenLink'>Menu</Link>
            <Link to='/reservations' id='hiddenLink'>Reservations</Link>
            <Link to='/' id='hiddenLink'>Order Online</Link>
            <Link to='/' id='hiddenLink'>Login</Link>
            <button onClick={toggleNavbar} aria-label="Open navigation" id='navbarButton'>
            <img src={icon} alt="Menu icon" id="menuicon"/>
            </button>
        </div>
    </div>
  )
}

export default Navbar