// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Work from './Work';
import Experience from './Experience';
import Passion from './Passion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';
import './Home.css';
import './index.css';
import { useState, useEffect } from 'react';

const App = () => {
  return (
    <Router>
       <ColorSchemesExample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/passion" element={<Passion />} />
        {/* Add more routes for other sections as needed */}
      </Routes>
    </Router>
  );
}
function ColorSchemesExample() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Adjust the scroll trigger distance as needed
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navbarStyle = {
    position: 'fixed', // Make the navbar fixed at the top
    top: 0,            // Position it at the top of the viewport
    width: '100%',     // Ensure it spans the full width of the viewport
    zIndex: 1020,    // Ensure it stays above other content (Bootstrap's default z-index for navbar is 1020)
    padding:"10px",
    backgroundColor: scrolled ? 'black' : 'transparent', // Change color based on scroll
    transition: 'background-color 0.3s',
    
  
  };
  
  return (
    <>
   
    
      <Navbar className="transparent-navbar" style={navbarStyle }>
        {/* <Navbar bg="light" variant="light" style={navbarStyle}> */}
        <Container>
          <Navbar.Brand><Link to="home-section" spy={true} smooth={true} offset={-70} duration={500} className="navbar-brand">
              Jenish Karasariya
            </Link></Navbar.Brand>
          <Nav className="ms-auto">
            {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
            {/* <Nav.Link as={Link} to="/about">About</Nav.Link> */}
            <Link to="about-section" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" activeClass="active-nav-link" >About</Link>
            <Link to="passion-section" spy={true} smooth={true} offset={-50} duration={500} className="nav-link" activeClass="active-nav-link">Passion</Link>
            <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
            <Nav.Link as={Link} to="/work">Work</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
;
