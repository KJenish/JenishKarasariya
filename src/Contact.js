import React from 'react';
import './Contact.css'; // Make sure to link the correct CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";



const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:karasari@usc.edu";
  };

  return (
    <div className="contactContainer">
      <FontAwesomeIcon icon={faPaperPlane} className="animated bounceInDown" size="4x" />
        <h1 className="title">GET IN TOUCH!</h1>
        <p>Whether you have an idea for a project or just want to chat, feel free to shoot me an email!</p>
        <button className="emailButton" onClick={handleEmailClick}>Say Hello</button>
        <div className="socialIcons">
        <a href="https://www.facebook.com/profile.php?id=100008013947943&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" ></i></a>
        <a href="https://www.instagram.com/j_karsariya/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://github.com/KJenish" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/jenish-karsariya/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <Link
              to="home-section"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            ><div className="rocketContainer">
            <FontAwesomeIcon
              icon={faRocket}
              size="3x"
              className="rocketIcon"
              style={{marginBottom:"20px"}}
            />
            <span className="hoverMessage">Hit me up!</span>
          </div>
        </Link>
      
      <footer className="footer">
      
        <p>© Jenish Karasariya 2024</p>
      </footer>
    </div>
  );
}

export default Contact;
