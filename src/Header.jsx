// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import BusinesDate from './businessData';
const Header = () => {
  return (
    <header>
      <BusinesDate/>
      <nav>
        <ul>
          <li>
            <Link to="/admin/business">Business Details</Link>
          </li>
          <li>
            <Link to="/admin/services">Services List</Link>
          </li>
          <li>
            <Link to="/admin/appointments">Appointments List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
