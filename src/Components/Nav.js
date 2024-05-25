import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
               
                <Link to="/home">Home</Link>
              
                <Link to="/about">About</Link>
               
                <Link to="/menu">Menu</Link>
               
                <Link to="/reservations">Reservations</Link>
                
                 <Link to="/home">Order Online</Link>
               
                <Link to="/home">Login</Link>
                
        </nav>
    )
}

export default Nav;