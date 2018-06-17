import React from 'react';
import {Link} from 'react-router-dom';
import Logo from './Logo';

const Header = () => (
  <nav
    className="header level"
    style={{
      backgroundColor: '#CE403A',
      padding: '10px 20px',
    }}
  >
    <Link to="/" className="level-left">
      <Logo size={40} />
      <h1 className="title has-text-white" style={{display: 'inline-block'}}>
        Pokedex
      </h1>
    </Link>

    <div className="level-right">
      <Link to="/about" className="level-left has-text-white">
        About
      </Link>
    </div>
  </nav>
);

export default Header;
