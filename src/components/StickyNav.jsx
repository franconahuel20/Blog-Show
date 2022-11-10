import React from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, Form, Button } from "react-bootstrap/";
import Social from "./Social";
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
 */

const StickyNav = () => {
  return (
    <>
      <Navbar className="b-grey" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#">
            <img
              alt="logo"
              src="/img/logo.png"
              height="40px"
              className="d-block m-0 p-0"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#action2">Destacado</Nav.Link>
              <Nav.Link href="#action2">Categorías</Nav.Link>
              {/* ME GUSTA? PREGUNTAR*/}
              <Social /> {/* COMPONENTE SOCIAL */}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Escribe algo..."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-warning">🔎</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default StickyNav;
