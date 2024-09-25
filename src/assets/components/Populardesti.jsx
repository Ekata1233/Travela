import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';


function Populardesti() {
    const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (destination) => {
    setActiveButton(destination);
  }
  return (
    <div>
        <Container>
        <h4 className='colorBlue text-center pt-5 pb-2'>----- SERVICES -----</h4>
        <h1 className='text-center'>Our Services</h1>
        <div className='d-flex justify-content-between py-5'>
        <Button
        variant=""
        className={`destiBtn rounded-pill py-2 ${activeButton === 'All' ? 'active-btn' : ''}`}
        onClick={() => handleButtonClick('All')}
      >
        All
      </Button>

      <Button
        variant=""
        className={`destiBtn rounded-pill py-2 ${activeButton === 'USA' ? 'active-btn' : ''}`}
        onClick={() => handleButtonClick('USA')}
      >
        USA
      </Button>

      <Button
        variant=""
        className={`destiBtn rounded-pill py-2 ${activeButton === 'Canada' ? 'active-btn' : ''}`}
        onClick={() => handleButtonClick('Canada')}
      >
        Canada
      </Button>

      <Button
        variant=""
        className={`destiBtn rounded-pill py-2 ${activeButton === 'Europe' ? 'active-btn' : ''}`}
        onClick={() => handleButtonClick('Europe')}
      >
        Europe
      </Button>

      <Button
        variant=""
        className={`destiBtn rounded-pill py-2 ${activeButton === 'China' ? 'active-btn' : ''}`}
        onClick={() => handleButtonClick('China')}
      >
        China
      </Button>

      <Button
        variant=""
        className={`destiBtn rounded-pill py-2 ${activeButton === 'Singapore' ? 'active-btn' : ''}`}
        onClick={() => handleButtonClick('Singapore')}
      >
        Singapore
      </Button>
            </div>
        </Container>
    </div>
  )
}

export default Populardesti