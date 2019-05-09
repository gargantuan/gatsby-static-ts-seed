import * as React from 'react';
import { Link } from 'gatsby';

export default () => (
  <nav>
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);
