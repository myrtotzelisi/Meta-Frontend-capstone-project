import React from 'react'
import {dishes} from '../helpers/Dishes'
import { DishCard } from '../helpers/DishCard'
import '../styles/Specials.css'

export const Specials = () => {
  return (
    <div className='specials'>
      <div className='menuTop'>
        <h5>This weeks specials</h5>
        <button>Online menu</button>
      </div>
      <div className='menuBottom'>
        {dishes.map((dish, index) =>
        { 
          return <DishCard key={index} data={dish}/>
        })

        }
      </div>
    </div>
  )
}
