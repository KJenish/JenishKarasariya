import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
  return (
    <div className="home-container">
      <header>
        {/* Include the Navbar component here */}
        <ColorSchemesExample />
      </header>



      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flex: 1, borderRight: '1px solid #ccc', alignItems: 'center', justifyContent: 'center'}}>
          {/* Content for the left half */}
         <h1> Hii I'm Jenish Karsariya</h1>
        </div>
        <div style={{ flex: 1 }}>
          {/* Content for the right half */}
          Right Half
        </div>
      </div>
      {/* Add any additional content for the home section */}
    </div>


  );
}

// Extract the Navbar component into a separate component
function ColorSchemesExample() {
  // const navbarStyle = {
  //   position: 'fixed',
  //   width: '100%',
  //   zIndex: '100',  // Adjust the z-index as needed to avoid overlapping with other elements
  // };
  return (
    <>
      <Navbar bg="light" variant="light" >
        {/* <Navbar bg="light" variant="light" style={navbarStyle}> */}
        <Container>
          <Navbar.Brand as={Link} to="/">Jenish Karasariya</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/passion">Passion</Nav.Link>
            <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
            <Nav.Link as={Link} to="/work">Work</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Home;

