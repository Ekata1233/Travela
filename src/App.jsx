import { useState } from 'react'
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './assets/components/Header';
import Home from './assets/components/Home';
import About from './assets/components/About';
import Booknow from './assets/components/Booknow';
import Services from './assets/components/Services';
import Blog from './assets/components/Blog';
import Contact from './assets/components/Contact';
import Packages from './assets/components/Packages';
import Aboutus from './assets/components/Aboutus';
import Footer from './Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Header/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Booknow' element={<Booknow/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Packages' element={<Packages/>}/>
        




      </Routes>
      <Footer/>
      
      </BrowserRouter>
     
    </>
  )
}

export default App
