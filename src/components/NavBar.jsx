import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAt, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





export const NavBar = () => {
  return (
    <>
      <Navbar sticky='top' className='w-100' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <div>
              <div>
                <img src="./img/logo.ico" alt="logo" />
              </div>
          
                       
              <div>
                <img className='mx-1' src="./img/instasplash.png" alt="instagram" />
              
              
                <img className='mx-1' src="./img/facebook-splash.png" alt="instagram" />
              
              
                <img className='mx-1' src="./img/twitter-splash.png" alt="instagram" />
              
            
              </div>
              </div>
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">Destacado</Nav.Link>
            <Nav.Link href="#features">Contacto</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><FontAwesomeIcon icon={faThumbsUp} /><Badge className='mx-1' bg="secondary">New</Badge></Nav.Link>
            <Nav.Link href="#memes"><FontAwesomeIcon icon={faAt} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  )
}
