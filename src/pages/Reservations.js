import React from 'react'
import BookingForm from '../Components/BookingForm'

function Reservations({availableTimes, dispatch, submitForm }) {
  return (
    <div>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
    </div>
  )
}

export default Reservations