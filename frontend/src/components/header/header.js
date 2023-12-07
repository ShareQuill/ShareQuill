import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faMessage } from '@fortawesome/free-regular-svg-icons';


export default function AppHeader() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <div>
      {/* Top Navbar */}
      <Navbar className="nav_bar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className='text' href="#home"></Nav.Link>
              <Nav.Link className='text' href="#link"></Nav.Link>
              <Nav.Link className='text' href="#link"></Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="#user" className='uppertext'>Help and support</Nav.Link>
              <Nav.Link href="#user" className='uppertext nohover'>|</Nav.Link>
              <Nav.Link href="/login" className='uppertext'>Sign-in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Navbar */}
      <Navbar expand="lg" className="nav_bar1">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="media/logo1.png"
              alt="Share Quill Logo"
              height="40"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavDropdown title="Home" id="nav-dropdown-home" drop="down" className="no-arrow-dropdown nav_bar1_text">
                <NavDropdown.Item href="#home-action1">Action 1</NavDropdown.Item>
                <NavDropdown.Item href="#home-action2">Action 2</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Product" id="nav-dropdown-product" drop="down" className="no-arrow-dropdown nav_bar1_text">
                <NavDropdown.Item href="#product-action1">Action 1</NavDropdown.Item>
                <NavDropdown.Item href="#product-action2">Action 2</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="About" id="nav-dropdown-about" drop="down" className="no-arrow-dropdown nav_bar1_text">
                <NavDropdown.Item href="#about-action1">Action 1</NavDropdown.Item>
                <NavDropdown.Item href="#about-action2">Action 2</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="#search"><FontAwesomeIcon icon={faBell} className='text-dark' /></Nav.Link>
              <Nav.Link onClick={handleOffcanvasToggle}><FontAwesomeIcon icon={faMessage} className='text-dark' /></Nav.Link>
              <NavDropdown title={<FontAwesomeIcon icon={faUser} className='text-dark' />} id="nav-dropdown-user" className="no-arrow-dropdown">
                <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas Component */}
      <Navbar.Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="end">
        <Navbar.Brand>Message Offcanvas</Navbar.Brand>
        {/* Add your offcanvas content here */}
      </Navbar.Offcanvas>
    </div>
  );
}
