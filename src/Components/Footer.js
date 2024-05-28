import { Link } from 'react-router-dom'
import logo from '../assets/Logo-sm-yellow.png'
import '../styles/Footer.css'

function Footer () {
    return(
    <footer className='footer'>
        <img src={logo} alt='Small logo'/>
        <div className='footerInfo'>
            <h6>Important Links</h6>
            <div className='footerLinks'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/reservations'>Reservations</Link>
            <Link to='/'>Order Online</Link>
            <Link to='/'>Login</Link>
            </div>
        </div>
        <div className='footerInfo'>
            <h6>Contact</h6>
            <div className='footerContact'>
            <p>Adress</p>
            <p>Email</p>
            <p>Phone Number</p>
            </div>
        </div>
        <div className='footerInfo' id='lastInfo'>
            <h6>Social Media</h6>
            <div className='footerLinks'>
                <a href="https://www.facebook.com/">Facebook</a>
                <a href="https://www.instagram.com/">Instagram</a>
                <a href="https://x.com/?lang=en">Twitter</a>
            </div>
        </div>
    </footer>
    )
}

export default Footer;