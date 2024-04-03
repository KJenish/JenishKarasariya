// Passion.js

import React from 'react';
import { FaLaptopCode, FaPaintBrush, FaUsers } from 'react-icons/fa'; // Make sure you've installed react-icons
import './Passion.css'; // Assume you'll create a Passion.css for styling

const Passion = () => {
  return (
    <div className="passion-container" id="passion-section">
      <h2 className="passion-title">WHAT I DO</h2>
      <div className="passion-areas">
        <div className="passion-area">
          <FaLaptopCode className="passion-icon" />
          <h3>DEVELOPMENT</h3>
          <p>Mastering the art of algorithms and data structures, I craft innovative solutions in web technologies. Leveraging frameworks like React.js and Node.js, I aspire to build responsive and intuitive user experiences.</p>
        </div>
        <div className="passion-area">
          <FaPaintBrush className="passion-icon" />
          <h3>DESIGN</h3>
          <p>Good design is rooted in understanding the user. My aim is to bridge the gap between user needs and functional interfaces, ensuring accessibility and engagement across all platforms.</p>
        </div>
        <div className="passion-area">
          <FaUsers className="passion-icon" />
          <h3>INVOLVEMENT</h3>
          <p>Collaboration and leadership define my involvement. As Deputy Treasurer of the USC HSO club and a proactive member of the CSI, I engage in creating meaningful community interactions and fostering a culture of innovation.</p>
        </div>
      </div>
    </div>
  );
};

export default Passion;

