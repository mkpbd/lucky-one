import React from "react";
import {
  Navbar,
  Container,
  Nav
  
} from "react-bootstrap";
const NavbarHeader = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid className="px-5">
          <Navbar.Brand href="#">Food App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Order</Nav.Link>
              <Nav.Link href="#action2">About us</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>

            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarHeader;
