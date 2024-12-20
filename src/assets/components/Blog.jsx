import React, { useEffect } from 'react'
import PopularBlog from './PopularBlog'

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className=''><div className="div-mainImg">
    <div className="overlay">
      <h1 className="mainFontSize fw-bold text-light">Blog</h1>
      <h5 className="params">Home / Pages / <span className="text-light">Blog</span> </h5>
    </div>
  </div>
  <PopularBlog/>
  </div>
  )
}

export default Blog