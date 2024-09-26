import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function AwesomePack() {
    const [activeButton, setActiveButton] = useState('');

    const handleButtonClick = (destination) => {
        setActiveButton(destination);
    };
  return (
    <div className='' style={{ marginTop: '120px' }}>
      <Container>
      <h4 className='colorBlue pt-5 pb-2 text-center'>----- PACKAGES -----</h4>
      <h1 className='text-center'>Awesome Packages</h1>
      <div className='d-flex justify-content-between py-5'>
                    <Button
                        variant=""
                        className={`destiBtn rounded-pill py-3 mx-1 ${activeButton === 'LeftArrow' ? 'active-btn' : ''}`}
                        onClick={() => handleButtonClick('LeftArrow')}
                    >
                        <FaArrowLeft />
                    </Button>

                    <Button
                        variant=""
                        className={`destiBtn rounded-pill py-3 mx-1 ${activeButton === 'RightArrow' ? 'active-btn' : ''}`}
                        onClick={() => handleButtonClick('RightArrow')}
                    >
                        <FaArrowRight />
                    </Button>
                </div>
      </Container>
    </div>
  )
}

export default AwesomePack