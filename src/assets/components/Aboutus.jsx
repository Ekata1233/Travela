import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaArrowRight } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';

function Aboutus() {
  return (
    <div className=' 'style={{marginTop:"250px"}}>
         <Container className='mb-5'>
      <Row className=''>
        <Col sm="12" md="12" lg="5" className='px-4'>
        <div className=' px-5 para para1'>
          <div className=''><img src='./about-img.jpg' className='w-100 h-100 img-fluid'/></div>
        </div>
        </Col>
         <Col sm="12" md="12" lg="7" className='px-4 aboutus'>
          <div className='h-100 ' style={{ background: 'linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(/about-img-1.png)' }}>
          <h5 className='colorBlue  fw-bold'>ABOUT US -----</h5>
          <h1 className='my-3'>Welcome to <span className='colorBlue '>Travela</span></h1>
          <p className='my-4 text-secondary'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolorum, doloribus sunt dicta, officia voluptatibus libero necessitatibus natus impedit quam ullam assumenda? Id atque iste consectetur. Commodi odit ab saepe!</p>
          <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos voluptatem suscipit neque enim, doloribus ipsum rem eos distinctio, dignissimos nisi saepe nulla? Libero numquam perferendis provident placeat molestiae quia?</p>
          <Row className='my-4'>
            <Col sm="" className='arrow'>
              <div className='text-secondary py-1'><FaArrowRight className='me-3 colorBlue fw-bolder'/>First Class Flights</div>
              <div className='text-secondary py-1'><FaArrowRight className='me-3 colorBlue fw-bolder'/>5 Star Accommodations</div>
              <div className='text-secondary py-1'><FaArrowRight className='me-3 colorBlue fw-bolder'/>150 Premium City Tours</div>
            </Col>
            <Col>
              <div className='text-secondary py-1'><FaArrowRight className='me-3 colorBlue fw-bolder'/> Handpicked Hotels</div>
              <div className='text-secondary py-1'><FaArrowRight className='me-3 colorBlue fw-bolder'/>Latest Model Vehicles</div>
              <div className='text-secondary py-1'><FaArrowRight className='me-3 colorBlue fw-bolder'/>24/7 Service</div>
              
            </Col >
            
          </Row> 
          <Button variant="outline-primary" id="discovernow" className='white-btn position-absolute me-2 py-3 px-5 mt-1 mb-4 rounded-pill fw-bold '  >
          Read More
        </Button>
          </div>
         
        </Col> *
        
      </Row>
      
      
    </Container>
    </div>
  )
}

export default Aboutus