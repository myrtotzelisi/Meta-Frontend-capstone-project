import React from 'react'
import BookingForm from '../Components/BookingForm'
import '../styles/Reservations.css'

function Reservations({availableTimes, dispatch, submitForm }) {
  return (
    <div className='reservations'>
      <h4>Reservations</h4>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
    </div>
  )
}

export default Reservations