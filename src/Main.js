import restaurantfood from './assets/Restaurantfood.jpg'


function Main() {
    return(
    <div className="hero">
        <section>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </section>
        <button>Reserve a table</button>
        <img src={restaurantfood} alt='Food' width='200px'/>
    </div>
    )
}

export default Main;