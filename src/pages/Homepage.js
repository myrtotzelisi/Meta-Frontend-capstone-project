import React from 'react'
import Header from '../Components/Header'
import { Specials } from '../Components/Specials'
import { Testimonials } from '../Components/Testimonials'

function Homepage() {
  return (
    <div>
      <Header/>
      <Specials/>
      <Testimonials/>
    </div>
  )
}

export default Homepage