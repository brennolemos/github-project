import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="Header">
      <Link className="brand" to="/">
        <h2>Github Finder</h2>
      </Link>
    </header>
  );
};

export default Header;
