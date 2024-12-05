import React from 'react';

function Header() {
  return (
    <header style={{ background: '#007bff', color: '#fff', padding: '10px 20px' }}>
      <h1>Nikoo Asadnejad</h1>
      <nav>
        <a href="#about" style={{ margin: '0 15px' }}>About</a>
        <a href="#skills" style={{ margin: '0 15px' }}>Skills</a>
        <a href="#projects" style={{ margin: '0 15px' }}>Projects</a>
        <a href="#contact" style={{ margin: '0 15px' }}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;