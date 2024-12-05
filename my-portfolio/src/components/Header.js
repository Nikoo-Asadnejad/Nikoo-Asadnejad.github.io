import React from 'react';

function Header() {
  return (
    <header style={{ background: '#006666', color: '#fff',textAlign: 'center', padding: '10px 20px' }}>
      <h1>Nikoo Asadnejad</h1>
      <nav>
        <a href="#about" style={{ margin: '0 15px' , color: '#fff' }}>About</a>
        <a href="#skills" style={{ margin: '0 15px' , color: '#fff'}}>Skills</a>
        <a href="#projects" style={{ margin: '0 15px' , color: '#fff'}}>Projects</a>
        <a href="#contact" style={{ margin: '0 15px' , color: '#fff'}}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;