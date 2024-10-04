import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Aboutus from './Aboutus';
import Blog from './Blog';
import Services from './Services';
import Ourserivices from './Ourserivices';
import Populardesti from './Populardesti';
import TheWorld from './TheWorld';
import AwesomePack from './AwesomePack';
import Tourism from './Tourism';



function Home() {
  return (
    <div >
      <div className=' 'style={{ overflow:"hidden"}}>
        <div className='' >  
        <Carousel data-bs-theme="dark" className='' >
            
      <Carousel.Item >
     
        <img
          className="d-block w-100 cimg md-h-75"
          src="/carousel-1.jpg"
          alt="First slide"
          style={{filter: 'brightness(50%)'}}
        />
        
        <Carousel.Caption className='text-light' >
        <h3 className='fw-bold mb-4 h33'>EXPLORER THE WORLD</h3>
        <h1 className='h11 mb-5 '>Find Your Perfect Tour At Travel</h1>

          <h5 className='h55'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h5>
          <Button variant="" id='discovernow' className=' rounded-pill fw-bold me-5 px-5 py-3 ms-3 mt-5 ' >Discover Now</Button> 

          
        </Carousel.Caption>
        
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100 cimg"
          src="/carousel-2.jpg"
          alt="Second slide"
          style={{filter: 'brightness(50%)'}}
        />
        <Carousel.Caption className='text-light ' >
          <h3 className='fw-bold mb-4 h33'>EXPLORER THE WORLD</h3>
          <h1 className='h11 mb-5'>Let's The World Together!</h1>
          <h5 className='h55'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h5>
          <Button variant="" className='rounded-pill fw-bold me-5 px-5 py-3 ms-3 mt-5  ' id='discovernow'>Discover Now</Button> 

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 cimg"
          src="/carousel-3.jpg"
          alt="Third slide"
          style={{filter: 'brightness(50%)'}}
        />
        <Carousel.Caption className='text-light' >
        <h3 className='fw-bold mb-4 h33'>EXPLORER THE WORLD</h3>
        <h1 className='h11 mb-5 fs-sm-10'>You Like To Go?</h1>
          <h5 className='h55'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
</h5>
<Button variant="" className='rounded-pill fw-bold me-5 px-5 py-3 ms-3 mt-5 ' id='discovernow'>Discover Now</Button> 

        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
        </div>


        <div className='blue w-75  px-5  pt-5 pb-4 m-auto rounded-pill  search position-absolute'>
        <InputGroup className="mb-3  ">
        <Form.Control
          placeholder="Eg:Thailand"
          aria-label="Eg:Thailand"
          aria-describedby="basic-addon2"
          className='p-3 rounded-pill'
        />
        <Button variant="outline-primary" id="button-addon2" className='white-btn position-absolute me-2 py-2 px-4 mt-1 mb-4 rounded-pill fw-bold '  >
          Search
        </Button>
      </InputGroup>
        </div>
        
        </div>
        <Aboutus/>
        <Ourserivices/>
        <Populardesti/>
        <TheWorld/>
        
        <AwesomePack/>
        <Tourism/>
        <Blog/>
        <Services/>
    </div>
  )
}

export default Home