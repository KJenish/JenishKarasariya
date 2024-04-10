// import React from "react";

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import "./Home.css";
import About from "./About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import Passion from "./Passion";
import Experience from "./Experience";
const phrases = [
  "Jenish Karsariya",
  "Software Engineer",
  "Full Stack Developer",
];

const Home = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const targetPhrase = phrases[count % phrases.length];
    if (isDeleting) {
      setTypingSpeed(100);
    }

    if (!isDeleting && text === targetPhrase) {
      setIsDeleting(true);
      setTypingSpeed(2000); // Pause before starting to delete
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setCount(count + 1);
      setTypingSpeed(100); // Pause before typing next phrase
    }

    const timeout = setTimeout(() => {
      setText((currentText) => {
        return isDeleting
          ? targetPhrase.slice(0, currentText.length - 1)
          : targetPhrase.slice(0, currentText.length + 1);
      });
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, count, typingSpeed]);

  return (
    <>
      <div className="home-container" id="home-section">
        <div
          style={{
            marginTop: "25%",
            height: "calc(100% - 70px)",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "100px",
          }}
        >
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {/* Content for the left half */}
            <div>
              <h1 id="head_col">Hello, I'm a</h1>
            </div>
            <div>
              <h1 className="typing-effect">
                {text}
                <span className="cursor"></span>
              </h1>
            </div>
          </div>
          <div className="chevron-down">
            {" "}
            {/* Adjust styling as needed */}
            <Link
              to="about-section"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                size="2x"
                className="icon-chevron-down"
              />
            </Link>
          </div>
        </div>
        {/* Add any additional content for the home section */}
      </div>

      <div id="about-section" style={{ padding: "0px 20px 10px 10px" }}>
        <About />
      </div>
      <div id="passion-section">
        <Passion />
      </div>
      <div id="experience-section" style={{ minHeight: "100vh" }}>
        <Experience />
      </div>
    </>
  );
};

export default Home;
