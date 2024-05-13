import logo from './assets/Logo.jpg'

function Header() {
    return (
    <div>
        <h1>Little Lemon restaurant</h1>
        <img src={logo} alt="Little lemon logo"/>
    </div>
    )
}

export default Header;