import React, { useEffect } from 'react'
import MeetGuide from './MeetGuid'

export default function TravelGuid() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
         <div className="div-mainImg">
    <div className="overlay">
      <h1 className="mainFontSize fw-bold text-light">Services</h1>
      <h5 className="params">Home / Pages / <span className="text-light">Travel Guide</span> </h5>
    </div>
  </div>
  <MeetGuide/>
    </div>
  )
}
