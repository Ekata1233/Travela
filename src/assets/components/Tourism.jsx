import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

function Tourism() {
    const [activeButton, setActiveButton] = useState("");

    const handleButtonClick = (destination) => {
      setActiveButton(destination);
    };
  return (
    <div>
        
                <h4 className='colorBlue pt-5 pb-2 text-center'>----- EXPLORE TOUR -----</h4>
                <h1 className='text-center'>The World</h1>
                <p className='colorGray text-center w-75 py-4 m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat.</p>
        <div className="d-flex justify-content-center py-5  flex-wrap  ">
        <Button
            variant=""
            className={`destiBtn rounded-pill py-2 m-3 ${
              activeButton === "All" ? "active-btn" : ""
            }`}
            onClick={() => handleButtonClick("All")}
          >
            All
          </Button>

          <Button
            variant=""
            className={`destiBtn rounded-pill py-2 m-3 ${
              activeButton === "USA" ? "active-btn" : ""
            }`}
            onClick={() => handleButtonClick("USA")}
          >
            USA
          </Button>

          

          <Button
            variant=""
            className={`destiBtn rounded-pill py-2 m-3 ${
              activeButton === "Europe" ? "active-btn" : ""
            }`}
            onClick={() => handleButtonClick("Europe")}
          >
            Europe
          </Button>

          <Button
            variant=""
            className={`destiBtn rounded-pill py-2 m-3 ${
              activeButton === "China" ? "active-btn" : ""
            }`}
            onClick={() => handleButtonClick("China")}
          >
            China
          </Button>

          <Button
            variant=""
            className={`destiBtn rounded-pill py-2 m-3 ${
              activeButton === "Singapore" ? "active-btn" : ""
            }`}
            onClick={() => handleButtonClick("Singapore")}
          >
            Singapore
          </Button>
        </div>

        
           
        <Container fluid className="d-flex flex-wrap justify-content-center">
          <Row lg="12" className='px-2'>
            {/* Column 1 */}
            <Col lg="2"  md="6" className="p-1">
            <div className=" div-touriimg h-50">
            <img src='/gallery-1.jpg' className="img-fluid touri-img h-100" alt="Gallery" />              
            <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i"
              >
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  20 Photos
                </Button>
                <h5>New York City</h5>
                <a href="#" className="text-decoration-none ">
                  View All City 
                </a>{" "}
              </div>
            </div>
            <div className=" div-touriimg h-50">
            <img src='/gallery-6.jpg' className="img-fluid touri-img h-100" alt="Gallery" />              
            <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i"
              >
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  20 Photos
                </Button>
                <h5>New York City</h5>
                <a href="#" className="text-decoration-none ">
                  View All City 
                </a>{" "}
              </div>
            </div>

            </Col>
            
            {/* Column 2 */}
            <Col lg="3" md="6" className="p-1">
            <div className=" div-touriimg h-50">
            <img src='/gallery-2.jpg' className="img-fluid touri-img h-100" alt="Gallery" />              
            <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i"
              >
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  20 Photos
                </Button>
                <h5>New York City</h5>
                <a href="#" className="text-decoration-none ">
                  View All City 
                </a>{" "}
              </div>
            </div>
            <div className=" div-touriimg h-50">
            <img src='/gallery-7.jpg' className="img-fluid touri-img h-100" alt="Gallery" />              
            <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i"
              >
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  20 Photos
                </Button>
                <h5>New York City</h5>
                <a href="#" className="text-decoration-none ">
                  View All City 
                </a>{" "}
              </div>
            </div>

            </Col>
            {/* Column 3 */}
            <Col lg="2" md="6" className="p-1">
            <div className=" div-touriimg h-50">
            <img src='/gallery-3.jpg' className="img-fluid touri-img h-100" alt="Gallery" />              
            <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i"
              >
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  20 Photos
                </Button>
                <h5>New York City</h5>
                <a href="#" className="text-decoration-none ">
                  View All City 
                </a>{" "}
              </div>
            </div>
            <div className=" div-touriimg h-50">
            <img src='/gallery-8.jpg' className="img-fluid touri-img h-100" alt="Gallery" />              
            <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i"
              >
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  20 Photos
                </Button>
                <h5>New York City</h5>
                <a href="#" className="text-decoration-none ">
                  View All City 
                </a>{" "}
              </div>
            </div>

            </Col>
            {/* Column 4 */}
            <Col lg="3" md="6" className="p-1">
            <div className=" div-touriimg h-50">
            <img src='/gallery-4.jpg' className="img-fluid touri-img h-100" alt="Gallery" />              
            <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i"
              >
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  20 Photos
                </Button>
                <h5>New York City</h5>
                <a href="#" className="text-decoration-none ">
                  View All City 
                </a>{" "}
              </div>
            </div>
            <div className=" div-touriimg h-50">
            <img src='/gallery-9.jpg' className="img-fluid touri-img h-100" alt="Gallery" />              
            <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i"
              >
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  20 Photos
                </Button>
                <h5>New York City</h5>
                <a href="#" className="text-decoration-none ">
                  View All City 
                </a>{" "}
              </div>
            </div>

            </Col>
            {/* Column 5 */}
            <Col lg="2" className="p-1">
            <div className=" div-touriimg h-50">
            <img src='/gallery-4.jpg' className="img-fluid touri-img h-100" alt="Gallery" />              
            <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i"
              >
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  20 Photos
                </Button>
                <h5>New York City</h5>
                <a href="#" className="text-decoration-none ">
                  View All City 
                </a>{" "}
              </div>
            </div>
            <div className=" div-touriimg h-50">
            <img src='/gallery-9.jpg' className="img-fluid touri-img h-100" alt="Gallery" />              
            <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i"
              >
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  20 Photos
                </Button>
                <h5>New York City</h5>
                <a href="#" className="text-decoration-none ">
                  View All City 
                </a>{" "}
              </div>
            </div>
               

            </Col>
          </Row>
        </Container>
           
        
                
            
    </div>
  )
}

export default Tourism