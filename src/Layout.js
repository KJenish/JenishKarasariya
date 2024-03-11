// Layout.js

import React, { useState } from 'react';
import About from './About';
import Passion from './Passion';
import Experience from './Experience';
import Work from './Work';
import Contact from './Contact';

const Layout = () => {
  const [currentSection, setCurrentSection] = useState('about');

  const renderSection = () => {
    switch (currentSection) {
      case 'about':
        return <About />;
      case 'passion':
        return <Passion />;
      case 'experience':
        return <Experience />;
      case 'work':
        return <Work />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div>
      <main>
        {renderSection()}
      </main>
    </div>
  );
}

export default Layout;
