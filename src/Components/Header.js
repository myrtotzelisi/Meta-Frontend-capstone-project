import { useNavigate} from 'react-router-dom'
import HeaderPhoto from '../assets/Restaurantfood.jpg'
import '../styles/Header.css'

function Header() {

    const navigate = useNavigate();

    return (
    <div className='header'>
        <div className="headerLeft">
            <h3>Little Lemon</h3>
            <h5>Chicago</h5>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button aria-label='Reserve a table' onClick={()=> navigate("/reservations")}>Reserve a table</button>
        </div>
        <div className='headerRight'>
            <img src={HeaderPhoto} alt='Restaurant food'/>
        </div>
    </div>
    )
}

export default Header;