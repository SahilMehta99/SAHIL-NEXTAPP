import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#" className="fs-3 fw-bold">ALTUDO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
          </Nav>
          <div className="col-md-3">
        <Nav className="me-auto">
        <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/logout">Log Out</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            </Nav>

        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



// const Header = () => {
//   return (
//     <div className={styles.headerpage}>
//       <nav class="navbar navbar-light bg-light">
//         <a class="navbar-brand" href="#">
//           <Image
//             src="/google.jpg"
//             width="250"
//             height="100"
//             alt=""
//             class="d-inline-block align-top"
//           />
//           <input />
//         </a>
//       </nav>
//     </div>
//   );
// };

export default Header;
