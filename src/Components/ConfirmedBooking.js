import React from 'react'
import { Testimonials } from './Testimonials'
import '../styles/ConfirmedBooking.css'

export const ConfirmedBooking = () => {
  return (
    <div className='confirmed'>
      <div className='text'>
      <h4>Your booking has been <span>confirmed!</span></h4>
      <h6>You will soon receive an email with the details of your reservation.</h6>
      </div>
        <Testimonials/>
    </div>
  )
}
