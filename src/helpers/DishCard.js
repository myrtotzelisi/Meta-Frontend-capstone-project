import React from 'react'
import { Link } from "react-router-dom";
import orderIcon from '../assets/order icon.png'

export const DishCard = (props) => {
  const {name, description, price, image} = props.data
  return (
    <div className='dishItem'>
      <img src={image} alt={name}/>
      <div className='item'>
        <h6>{name}</h6>
        <p>${price}</p>
      </div>
      <p id='foodDescription'>{description}</p>
      <div className='delivery'>
      <Link to='/'>Order delivery</Link>
      <img src={orderIcon} alt='little green biker' id='orderIcon'/>
      </div>
    </div>
  )
}
