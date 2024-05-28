import React from 'react'
import '../styles/About.css'
import Outdoors from '../assets/restaurant.jpg'
import Chef from '../assets/restaurant chef B.jpg'
import MarioAdrian from '../assets/Mario and Adrian b.jpg'

function About() {
  return (
    <div className='about'>
      <div className='aboutTop'>
        <h4>About us</h4>
        <p>Welcome to our family-owned Mediterranean restaurant in Chicago, established by Mario and Adrian. We pride ourselves on crafting delectable dishes rooted in time-honored recipes, each infused with a contemporary twist. Our passion for culinary excellence and family heritage shines through in every bite. From savory classics to inventive new favorites, our menu is a delightful journey through Mediterranean flavors, designed to tantalize your taste buds. Whether you're a longtime lover of Mediterranean cuisine or a curious newcomer, we invite you to experience the warmth and hospitality of our family table in the heart of Chicago. Join us for an unforgettable dining experience that bridges the past and the present.</p>
      </div>
      <div className='aboutBottom'>
        <img src={Outdoors} alt='Outdoors sitting'/>
        <img src={Chef} alt='A chef cooking'/>
        <img src={MarioAdrian} alt='Two chefs laughing'/>
      </div>
    </div>
  )
}

export default About