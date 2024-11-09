import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaGlobe } from "react-icons/fa6";
import { FaHotel } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
function Ourserivices() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    
  return (
    <div className='bg-body-tertiary  py-5' style={{marginTop:"230px"}}>
        <Container className=''>
            <h4 className='colorBlue text-center pt-5 pb-2'>----- SERVICES -----</h4>
            <h1 className='text-center'>Our Services</h1>
            <Row className='py-5 '>
                <Col lg="6">
                <div variant="outline-primary" className='p-5 border border-primary rounded rounded-4 d-flex my-3 ser services-div'>
                    <div className='justi'>
                        <h5>WorldWide Tours</h5>
                        <p className='pt-3 text grey'>Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.</p>
                    </div>
                    <div className='serviceIcon ps-4 colorBlue'><FaGlobe /></div>
                </div>
                
                </Col>
                <Col lang='6'>
                <div variant="outline-primary" className='p-5 border border-primary rounded rounded-4 d-flex my-3 services-div'>
                <div className='serviceIcon pe-4 colorBlue'><FaGlobe /></div>

                    <div className='justi'>
                        <h5>WorldWide Tours</h5>
                        <p className='pt-3 text grey'>Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.</p>
                    </div>
                </div>
                </Col>
                <Col lg="6">
                <div variant="outline-primary" className='p-5 border border-primary rounded rounded-4 d-flex my-3 services-div'>
                    <div className='justi'>
                        <h5>Hotel Reservation</h5>
                        <p className='pt-3 text grey'>Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.</p>
                    </div>
                    <div className='serviceIcon ps-4 colorBlue'><FaHotel /></div>
                </div>
                
                </Col>
                <Col lang='6'>
                <div variant="outline-primary" className='p-5 border border-primary rounded rounded-4 d-flex my-3 services-div'>
                <div className='serviceIcon pe-4 colorBlue'><FaHotel /></div>

                    <div className='justi'>
                        <h5>Hotel Reservation</h5>
                        <p className='pt-3 text grey'>Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.</p>
                    </div>
                </div>
                </Col>
                <Col lg="6">
                <div variant="outline-primary" className='p-5 border border-primary rounded rounded-4 d-flex my-3 services-div'>
                    <div className='justi'>
                        <h5>Travel Guides</h5>
                        <p className='pt-3 text grey'>Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.</p>
                    </div>
                    <div className='serviceIcon ps-4 colorBlue'><FaUser /></div>
                </div>
                
                </Col>
                <Col lang='6'>
                <div variant="outline-primary" className='p-5 border border-primary rounded rounded-4 d-flex my-3 services-div'>
                <div className='serviceIcon pe-4 colorBlue'><FaUser /></div>

                    <div className='justi'>
                        <h5>Travel Guides</h5>
                        <p className='pt-3 text grey'>Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.</p>
                    </div>
                </div>
                </Col>
                <Col lg="6">
                <div variant="outline-primary" className='p-5 border border-primary rounded rounded-4 d-flex my-3 services-div'>
                    <div className='justi'>
                        <h5>Event Management</h5>
                        <p className='pt-3 text grey'>Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.</p>
                    </div>
                    <div className='serviceIcon ps-4 colorBlue'><FaCog /></div>
                </div>
                
                </Col>
                <Col lang='6'>
                <div variant="outline-primary" className='p-5 border border-primary rounded rounded-4 d-flex my-3 services-div'>
                <div className='serviceIcon pe-4 colorBlue'><FaCog /></div>

                    <div className='justi'>
                        <h5>Event Management</h5>
                        <p className='pt-3  text grey'>Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.</p>
                    </div>
                </div>
                </Col>
          
            </Row>
           <div className='d-flex justify-content-center mb-5'>
           <Button variant="outline-primary" id="discovernow" className='white-btn position-absolute me-2 py-3 px-5 rounded-pill fw-bold '  >
          
          Service More
        </Button>
           </div>
        </Container>
    </div>
  )
}

export default Ourserivices