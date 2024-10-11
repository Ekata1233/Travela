import React from 'react'
import Tourism from './Tourism'

function OurGallery() {
  return (
    <div>
         <div className="div-mainImg">
    <div className="overlay">
      <h1 className="mainFontSize fw-bold text-light">OurGallery</h1>
      <h5 className="params">Home / Pages / <span className="text-light">
        Our Gallery</span> </h5>
    </div>
  </div>
  <Tourism/>
    </div>
  )
}

export default OurGallery