import React from 'react'
import Aboutus from './Aboutus'
import MeetGuide from './MeetGuid'

function About() {
  return (
    <div className='text-dark'>
      <div className="div-mainImg">
        <div className="overlay">
          <h1 className="mainFontSize fw-bold text-light">About</h1>
          <h5 className="params">Home / Pages / <span className="text-light">About</span> </h5>
        </div>
      </div>
      <Aboutus/>
      <MeetGuide/>
    </div>
  )
}

export default About