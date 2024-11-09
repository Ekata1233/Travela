import React, { useEffect } from 'react'
import Populardesti from './Populardesti'

function Destination() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
        <div className="div-mainImg">
    <div className="overlay">
      <h1 className="mainFontSize fw-bold text-light">Travel Destination</h1>
      <h5 className="params">Home / Pages / <span className="text-light">Destination</span> </h5>
    </div>
  </div>
  <Populardesti/>
    </div>
  )
}

export default Destination