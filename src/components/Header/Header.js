import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Github } from '../../assets/github.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="Header">
      <Link className="brand" to="/">
        <h2>Github Finder</h2>
      </Link>
      <a
        href="https://github.com/brennolemos/github-project"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
      </a>
    </header>
  );
};

export default Header;
