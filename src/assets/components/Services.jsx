import React from 'react'
import Ourserivices from './Ourserivices'
import Testimonial from './Testimonial'

function Services() {
  return (
    <div><div className="div-mainImg">
    <div className="overlay">
      <h1 className="mainFontSize fw-bold text-light">Services</h1>
      <h5 className="params">Home / Pages / <span className="text-light">Contact</span> </h5>
    </div>
  </div>
  <Ourserivices/>
  <Testimonial/>
  </div>
  )
}

export default Services