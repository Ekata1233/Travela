import React, { useEffect } from 'react'
import TheWorld from './TheWorld'

function ExplorerTour() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div> <div className="div-mainImg">
    <div className="overlay">
      <h1 className="mainFontSize fw-bold text-light">Tour Category</h1>
      <h5 className="params">Home / Pages / <span className="text-light">Explorer Tour</span> </h5>
    </div>
  </div>
  <TheWorld/>
  </div>
  )
}

export default ExplorerTour