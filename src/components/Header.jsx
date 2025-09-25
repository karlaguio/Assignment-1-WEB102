import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title" style={{ marginTop: 0 }}>Tech Community Board</h1>
        <p className="header-subtitle">
          Find tech events and workshops in your area
        </p>
      </div>
    </header>
  );
}

export default Header;