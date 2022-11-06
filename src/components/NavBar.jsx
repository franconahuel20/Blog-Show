import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAt, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';




export const NavBar = () => {
  return (
    <>
      <Navbar sticky='top' className='w-100' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Destacado</Nav.Link>
            <Nav.Link href="#features">Contacto</Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
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
