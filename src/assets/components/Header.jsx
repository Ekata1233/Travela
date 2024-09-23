import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoLocationSharp } from "react-icons/io5";

function Header() {
  return (
    <div>
        
        <div className=' blue container-fluid px-4 py-2 text-center d-none d-lg-block ' >
        <span className='d-flex text-light'>
        <div className='ps-4'>
            <FaTwitter className='border border-1 rounded rounded-circle p-2 text-light me-2' style={{width:"35px", height:"35px"}}/>

            <FaFacebookF className='border border-1 rounded rounded-circle p-2 text-light me-2' style={{width:"35px", height:"35px"}}/>

            <FaLinkedinIn className='border border-1 rounded rounded-circle p-2 text-light me-2' style={{width:"35px", height:"35px"}}/>

            <FaInstagram className='border border-1 rounded rounded-circle p-2 text-light me-2' style={{width:"35px", height:"35px"}}/>

            <FaYoutube className='border border-1 rounded rounded-circle p-2 text-light me-2' style={{width:"35px", height:"35px",}}/>
        </div>

        {/* ------------------------------------------------------------------ */}
        <FaUser  className='px-2 py-2 ' style={{width:"35px", height:"35px", marginLeft:"55%"}} /><span className='py-1'>Register</span>

        <FaArrowRightToBracket className='px-2 py-2 ms-2' style={{width:"35px", height:"35px"}}/><span className='py-1'>Login</span>

        <FaHome className='px-2 py-2 ms-2' style={{width:"35px", height:"35px",}}/>
        
        <NavDropdown
              id="nav-dropdown-dark-example"
              title="My Dashboard"
              menuVariant="light" className='py-1 ms-2 '
            >
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Inbox
              </NavDropdown.Item>
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
        <div className=''>
         <Navbar expand="lg" className=" bg-transparent position-fixed w-100 z-index-10 mt-2 mt-sm-2 mt-md-2 mt-lg-5 " style={{backdropFilter:"blur(1px)", py:'4'}}>
      <Container fluid>
     <h1 className='ps-4 text-light ms-2'> <IoLocationSharp />Travela</h1>
        <Navbar.Toggle aria-controls="navbarScroll" className="custom-toggle"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" navbar-light me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px', height:"100px" }}
            navbarScroll
          >
            <div className=' blue1  py-3 px-3' style={{marginTop:"-1px"}}>

<Nav.Link href="/About" className='fw-bold py-4 text-light llink'>Home</Nav.Link>
</div>
            <div className=' blue1  py-3 px-3' style={{marginTop:"-1px"}}>

            <Nav.Link href="/About" className='fw-bold py-4 text-light llink'>About</Nav.Link>
            </div>
            <div className=' blue1  py-3 px-3' style={{marginTop:"-1px"}}>

            <Nav.Link href="/Services" className='fw-bold py-4 text-light'>Services</Nav.Link>
            </div>
            <div className=' blue1  py-3 px-3' style={{marginTop:"-1px"}}>

            <Nav.Link href="Packages" className='fw-bold py-4 text-light'>Packages</Nav.Link>
            </div>
            <div className=' blue1  py-3 px-3' style={{marginTop:"-1px"}}>

            <Nav.Link href="Blog" className='fw-bold py-4 text-light'>Blog</Nav.Link>
            </div>
            <div className=' blue1  py-3 px-3' style={{marginTop:"-1px"}}>

            <NavDropdown title={<span className='text-light '>Pages</span> } className='fw-bold py-3' id="navbarScrollingDropdown">
             <div style={{}}>
                 <NavDropdown.Item href="/Destination">Destination</NavDropdown.Item>
              <NavDropdown.Item href="/Exploretour">
                Explore Tour
              </NavDropdown.Item>
              
              <NavDropdown.Item href="/TrevelBook">
               Travel Booking
              </NavDropdown.Item>
              <NavDropdown.Item href="/Ourgallary">
               Our Gallery
              </NavDropdown.Item>
              <NavDropdown.Item href="/TravelGuide">
               Travel Guides
              </NavDropdown.Item>
              <NavDropdown.Item href="/Traveltesti">
               Travel Testimonial
              </NavDropdown.Item>
             </div>
            </NavDropdown>
            </div>
            <div className=' blue1  py-3 px-3' style={{marginTop:"-1px"}}>

            <Nav.Link href="Contact" className='fw-bold py-4 text-light'>Contact</Nav.Link>
            </div>
            <div className='py-3'>
            <Button variant="" className='rounded-pill fw-bold me-5 py-2 ms-3 mt-3 text-white' style={{backgroundColor:"#13357B"}}>Book Now</Button> 
            </div>
          </Nav>
          
                   
        </Navbar.Collapse>
      </Container>
    </Navbar> 
        </div>
    </div>
  )
}

export default Header