import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  function signUp(){
    navigate('/Login')
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="bg-body-secondary">
      <div className="div-mainImg">
        <div className="overlay">
          <h1 className="mainFontSize fw-bold text-light">Registration</h1>
          <h5 className="params">
            Home / Pages / <span className="text-light">Registration</span>{" "}
          </h5>
        </div>
      </div>
      <Container className="d-flex justify-content-center ">
        <Form className="my-5 w-50 shadow   bg-white rounded p-5">
          <h2 className="text-center mb-4">Registration</h2>
          <Form.Group controlId="formGridName" className="mb-4">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>

          
            <Form.Group as={Col} controlId="formGridEmail" className="mb-4">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          

          <Form.Group as={Col} controlId="formGridPhone" className="mb-4">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Enter phone" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="Enter city" />
          </Form.Group>

          <Button
            variant="outline-primary"
            id="discovernow"
            className="rounded-pill fw-bold py-3 px-5 "
            onClick={signUp}
          >
            Sign Up
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Registration;