
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';






export const NavBarBlog=()=>{
  return (
    <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container >
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Destacados</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Likes </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

