import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAt, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from "./Login";
import Form from "react-bootstrap/Form";




export const NavBar = () => {
  return (
    <>
      <Navbar sticky='top' className='w-100 pb-3' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><Row xs={2} md={4} lg={6}>
            <div>
            <Col>
            <div>
              <img src="./img/logo.png" alt="logo" />
              </div>
              </Col>
              </div>
              <div >
            <Col id='socialBar' className="flex-column">            
              <div className='iconInsta navOption'><link rel="stylesheet" href="" /><img className='iconSocial' src="./img/instasplash.png" alt="" /></div>
              <div className='iconFacebook navOption'><link rel="stylesheet" href="" /><img className='iconSocial' src="./img/facebook-splash.png" alt="" /></div>
              <div className='iconTwitter navOption'><link rel="stylesheet" href="" /><img className='iconSocial' src="./img/twitter-splash.png" alt="" /></div>
            </Col>
            </div>
            </Row></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features"><span className='navOption' >Destacado</span></Nav.Link>
            <Nav.Link href="#features"><span className='navOption' >Contacto</span></Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link  href="#deets"><FontAwesomeIcon className='navOption' icon={faThumbsUp} /><Badge className='mx-1' bg="secondary">New</Badge></Nav.Link>
            <Nav.Link  href="#memes"><FontAwesomeIcon className='navOption' icon={faAt} /><span className='navOption'>Contactanos</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  )
}
