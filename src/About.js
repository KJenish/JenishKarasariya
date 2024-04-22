// About.js

import React from 'react';
import './Home.css';
import './About.css';
import profilePic from './jenish_karasariya.jpg';


const About = () => {
  return (
    <div className="about_container" id="about-section">
      <h2 className="about_title">A LITTLE BIT ABOUT ME</h2>
      <img src={profilePic} alt="Jenish Karasariya" className="about-profile-pic" />
      <div className="about_text">
        <p>Hello! I'm Jenish Mukeshbhai Karasariya, a Master's candidate in <a href="https://viterbigradadmission.usc.edu/programs/masters/msprograms/computer-science/ms-computer-science/" target="_blank" rel="noopener noreferrer">Computer Science</a> at the <a href="https://www.usc.edu/" target="_blank" rel="noopener noreferrer">University of Southern California</a>, poised to graduate in May 2024. My academic path and passion have been carved by a Bachelor of Technology in Computer Engineering, leading me to dive deep into algorithms, artificial intelligence, and web technologies. I pride myself on my proficiency across a wide range of programming languages and frameworks, such as Java, Python, and React.js, which have equipped me to tackle complex technical challenges with innovative solutions.</p>
        <p>Beyond the realm of code, I engage in leadership roles within student organizations and embrace collaborative projects that enhance both my technical and interpersonal skills. My internships have not only refined my technical acumen but also my ability to contribute to team-oriented environments. As I advance in my career, I'm enthusiastic about using technology to address real-world issues, aiming to make a tangible impact through my work.</p>
      </div>
      <div className="resume-download-card">
        <h3>CHECK OUT MY RESUME!</h3>
        <a href="https://drive.google.com/file/d/1zLPksrLCaszx2yZsMdORF-ycBNdUcRMN/view" target="_blank" rel="noopener noreferrer" download="Jenish_Karasariya_Resume" className="resume-download-button">
          Grab A Copy
        </a>
      </div>
    </div>
  );
}

export default About;
