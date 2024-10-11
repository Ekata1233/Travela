import React, { useEffect } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoLocationSharp } from "react-icons/io5";
import ScrollToTop from "react-scroll-to-top";
import {Link, useNavigate} from "react-router-dom"

function Header() {
  const navigate=useNavigate("")
  function signUp(){
    navigate("/Registration")
  }
  function login(){
    navigate("/Login")
  }
  function bookNow(){
    navigate("/BookNow")
  }
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className=" blue container-fluid px-4 py-2 text-center d-none d-lg-block ">
        <span className="d-flex text-light">
          <div className="ps-4 icon">
            <FaTwitter
              className="border border-1 rounded rounded-circle p-2  me-2 header-icon"
              style={{ width: "35px", height: "35px" }}
            />

            <FaFacebookF
              className="border border-1 rounded rounded-circle p-2 header-icon me-2"
              style={{ width: "35px", height: "35px" }}
            />

            <FaLinkedinIn
              className="border border-1 rounded rounded-circle p-2 header-icon me-2"
              style={{ width: "35px", height: "35px" }}
            />

            <FaInstagram
              className="border border-1 rounded rounded-circle p-2 header-icon me-2"
              style={{ width: "35px", height: "35px" }}
            />

            <FaYoutube
              className="border border-1 rounded rounded-circle p-2 header-icon me-2"
              style={{ width: "35px", height: "35px" }}
            />
          </div>

          {/* ------------------------------------------------------------------ */}
          <div onClick={signUp} style={{cursor:"pointer"}}>
          <FaUser
            className="register px-2 py-2 "
            style={{ width: "35px", height: "35px" }}
          />
          <span className="py-1" >Register</span>
          </div>

          <div onClick={login} style={{cursor:"pointer"}}>
          <FaArrowRightToBracket
            className="px-2 py-2 ms-2"
            style={{ width: "35px", height: "35px" }}
          />
          <span className="py-1">Login</span>
          </div>
          <FaHome
            className="px-2 py-2 ms-2"
            style={{ width: "35px", height: "35px" }}
          />

          <NavDropdown
            id="nav-dropdown-dark-example"
            title="My Dashboard"
            menuVariant="light"
            className="py-1 ms-2" style={{zIndex:"300"}}
          >
            <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Inbox</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Notification</NavDropdown.Item>

            <NavDropdown.Item href="#action/3.4">
              Account Settings
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item>
          </NavDropdown>
        </span>
      </div>
      {/* ------------------------------------------------------------------------ */}
      {/* ----------------------Navrbar Start--------------------------------------------- */}
      <div className="">
        <Navbar
          expand="lg"
          className=" bg-transparent position-fixed w-100 z-index-10 mt-2 mt-sm-2 mt-md-2 mt-lg-5 border-bottom-custom shadow   bg-white rounded"
          style={{ backdropFilter: "blur(1px)", py: "4" }}
        >
          <Container fluid>
            <h1 className=" tra ps-4 text-light ms-2 ">
              {" "}
              <IoLocationSharp />
              Travela
            </h1>
            <Navbar.Toggle
              aria-controls="navbarScroll"
              className="custom-toggle"
            />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className=" navbar-light me-auto my-2 my-lg-0 custom-navbar"
                style={{ maxHeight: "100px", height: "100px" }}
                navbarScroll
              >
                <div
                  className=" blue1  py-3 px-2"
                  style={{ marginTop: "-1px" }}
                >
                  <Nav.Link as={Link}
                    to="/"
                    className="fw-bold py-4 text-light llink"
                    id="hom"
                  >
                    Home
                  </Nav.Link>
                </div>
                <div
                  className=" blue1  py-3 px-2"
                  style={{ marginTop: "-1px" }}
                >
                  <Nav.Link as={Link}
                    to="/About"
                    className="fw-bold py-4 text-light llink"
                  >
                    About
                  </Nav.Link>
                </div>
                <div
                  className=" blue1  py-3 px-2"
                  style={{ marginTop: "-1px" }}
                >
                  <Nav.Link as={Link}
                    to="/Services"
                    className="fw-bold py-4 text-light"
                  >
                    Services
                  </Nav.Link>
                </div>
                <div
                  className=" blue1  py-3 px-2"
                  style={{ marginTop: "-1px" }}
                >
                  <Nav.Link as={Link} to="Packages" className="fw-bold py-4 text-light">
                    Packages
                  </Nav.Link>
                </div>
                <div
                  className=" blue1  py-3 px-2"
                  style={{ marginTop: "-1px" }}
                >
                  <Nav.Link as={Link} to="Blog" className="fw-bold py-4 text-light">
                    Blog
                  </Nav.Link>
                </div>
                <div
                  className=" blue1  py-3 px-2"
                  style={{ marginTop: "-1px" }}
                >
                  <NavDropdown
                    title={
                      <span className=" " id="pages">
                        Pages<span className="custom-caret"></span>
                      </span>
                    }
                    className="fw-bold py-3"
                    id="navbarScrollingDropdown"
                  >
                    
                    <NavDropdown.Item as={Link} to="Destination">Destination</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="ExplorerTour">
                      Explore Tour
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="TravelBook">
                      Travel Booking
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="OurGallery">
                      Our Gallery
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="TrvaelGuid">
                      Travel Guides
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="Testi">
                      Testimonials
                    </NavDropdown.Item>
                    
                  </NavDropdown>
                </div>
                <div
                  className=" blue1  py-3 px-2"
                  style={{ marginTop: "-1px" }}
                >
                  <Nav.Link as={Link} to="Contact" className="fw-bold py-4 text-light">
                    Contact
                  </Nav.Link>
                </div>
                <div className="py-3">
                  <Button onClick={bookNow}
                    variant=""
                    id="discovernow"
                    className="rounded-pill fw-bold me-5 py-2 ms-3 mt-3 "
                  >
                    Book Now
                  </Button>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <ScrollToTop
        Smooth
        top="1000"
        color="white"
        className="rounded rounded-pill"
        style={{
          backgroundColor: "#13357B",

          padding: "10px 5px 15px 5px",
          fontWeight: "bold",
          fontSize: "10px",
        }}
      >
        &#8679;
      </ScrollToTop>
    </div>
  );
}

export default Header;