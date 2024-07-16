import React, { useState } from 'react'

function BookingForm({availableTimes, dispatch, submitForm }) {
  //should have created an state object
  const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [guests, setGuests] = useState('2')
    const [occasion, setOccasion] =  useState('Occasion')


   const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()){
          const formData = {name, email, date, time, guests, occasion}
        console.log(formData)
        submitForm (formData)
        }
    }
      
const handleChange = (e) => {
    const newDate = e.target.value
    setDate(newDate);
    dispatch({type: 'UPDATE_TIME', payload: newDate})
}

const [errors, setErrors] = useState({});
const validate = () => {
  const newErrors = {};
  if (!name || name.length < 3 || name.length > 40) {
      newErrors.name = 'Name must be between 3 and 40 characters';
  }
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address';
  }
  if (!date) {
      newErrors.date = 'Date is required';
  }
  
  if (guests < 2 || guests > 10) {
      newErrors.guests = 'Guests must be between 2 and 10';
  }
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  return (
    <div className='bookingForm'>
     <form onSubmit={handleSubmit} className='form'>
       <label htmlFor="name">Full name</label>
        <input type="text" placeholder="Enter your full name" minLength="3" maxLength="40" id="name" required value={name} onBlur={validate} onChange={(e) => setName(e.target.value)}/>
        {errors.name && <span className="error">{errors.name}</span>}

        <label htmlFor="email">Email address</label>
        <input type="email" placeholder="Enter your email adress" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} onBlur={validate}/>
        {errors.email && <span className="error">{errors.email}</span>}

        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value= {date} required  onChange={handleChange} onBlur={validate}/>
        {errors.date && <span className="error">{errors.date}</span>}

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} required onChange={(e) => setTime(e.target.value)} onBlur={validate}>
          {availableTimes.map((availableTime, index) => {
            return (
                <option key={index}>{availableTime}</option>
            )
          }
          )}
          
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="2" min="2" max="10" id="guests" required value={guests} onChange={(e) => setGuests(e.target.value)} onBlur={validate}/>
        {errors.guests && <span className="error">{errors.guests}</span>}
     
        <label htmlFor="occasion">Occasion (optional) </label>
        <select id="occasion" value={occasion} onChange={(e)=> setOccasion(e.target.value)} onBlur={validate}>
            <option>Select an occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
        </select>


        <button type="submit" aria-label="Click to make your reservation" disabled={date==='' || name==='' || email==='' || errors.name || errors.date || errors.guests || errors.email}>Make your reservation</button>
    </form>
    </div>
  )
}

export default BookingForm


