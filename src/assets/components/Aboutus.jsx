import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Aboutus() {
  return (
    <div className='aboutus '>
         <Container  className=''>
      <Row className='bg-primary p-5 ' style={{marginTop:""}}>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row className='bg-primary p-5 ' style={{marginTop:""}}>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row className='bg-primary p-5 ' style={{marginTop:""}}>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      
    </Container>
    </div>
  )
}

export default Aboutus