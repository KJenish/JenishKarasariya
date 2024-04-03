import React from 'react';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
import './Home.css';
import About from './About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import Passion from './Passion';




const Home = () => {
  return (
    <>
   
    <div className="home-container" id="home-section">
      <div style={{ marginTop: '25%', height: 'calc(100% - 70px)', alignItems: 'center', justifyContent: 'center', marginBottom:'100px' }}>
        <div  style={{ alignItems: 'center', justifyContent: 'center',textAlign: 'center'}}>
          {/* Content for the left half */}
          <div ><h1 id='head_col'>Hi, I'm</h1></div>
          <div><h1 className="name-hover-effect" >Jenish Karsariya</h1></div>
        </div>
        <div className='chevron-down'> {/* Adjust styling as needed */}
        <Link to="about-section" spy={true} smooth={true} duration={500} offset={-70}>
          <FontAwesomeIcon icon={faChevronDown} size="2x" className="icon-chevron-down" />
        </Link>
              </div>
      </div>
      {/* Add any additional content for the home section */}
      
    </div>
    
    <div id="about-section" style={{padding:"0px 20px 10px 10px"}}>
    <About />
    </div>
    <div id="passion-section" >
      <Passion/>
    </div>
    
    </>
   


  );
}

// // Extract the Navbar component into a separate component
// function ColorSchemesExample() {
//   const navbarStyle = {
//     position: 'fixed', // Make the navbar fixed at the top
//     top: 0,            // Position it at the top of the viewport
//     width: '100%',     // Ensure it spans the full width of the viewport
//     zIndex: 1020,      // Ensure it stays above other content (Bootstrap's default z-index for navbar is 1020)
//   };
//   return (
//     <>
//       <Navbar bg="light" variant="light" style={navbarStyle}>
//         {/* <Navbar bg="light" variant="light" style={navbarStyle}> */}
//         <Container>
//           <Navbar.Brand as={Link} to="/">Jenish Karasariya</Navbar.Brand>
//           <Nav className="me-auto">
//             {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
//             <Nav.Link as={Link} to="/about">About</Nav.Link>
//             <Nav.Link as={Link} to="/passion">Passion</Nav.Link>
//             <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
//             <Nav.Link as={Link} to="/work">Work</Nav.Link>
//             <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

export default Home;

