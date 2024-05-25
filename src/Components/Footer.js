import Nav from './Nav';
import logo from '../assets/Logo-sm-yellow.png'
import FbLogo from '../assets/Facebook_Logo.png'
import InstaLogo from '../assets/Instagram_Logo.png'

function Footer () {
    return(
    <footer>
        <div className="logo">
            <img src={logo} alt='Small logo'/>
        </div>
        <div className='footer-nav'>
            <Nav/>
        </div>
        <div className='footer-contact'>
            <p>Adress</p>
            <p>Email</p>
            <p>Phone Number</p>
        </div>
        <div className='footer-social'>
            <ul>
                <li>
                <a href="https://www.facebook.com/">
                    <img src={FbLogo} alt='Facebook logo' width='30px'/>
                    </a>
                </li>
                <li>
                <a href="https://www.instagram.com/">
                    <img src={InstaLogo} alt='Instagram logo' width='30px'/>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
    )
}

export default Footer;