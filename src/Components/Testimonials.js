import React from 'react'
import '../styles/Testimonials.css'
import { reviews } from '../helpers/reviews'

export const Testimonials = () => {
  return (
    <div className='testimonials'>
      <h5>Testimonials</h5>
      <div className='testimonialsCards'>
        {
          reviews.map((review, index) =>{
          return (
            <div key={index} className='cardItem'>
              <p id='stars'>{review.numberOfStars}⭐</p>
              <div className='personInfo'>
                <img src={review.image} alt=''/>
                <p>{review.name}</p>
              </div>
              <p id='reviewDescription'>'{review.descrption}'</p>
            </div>
          )}
         
          )
        }
      </div>
    </div>
  )
}
