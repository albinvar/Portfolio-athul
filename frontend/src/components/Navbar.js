import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/experience">Experience</Link></li>
      <li><Link to="/achievements">Achievements</Link></li>
      <li><Link to="/cv">CV</Link></li>
    </ul>
  </nav>
);

export default Navbar;
