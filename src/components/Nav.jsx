import React from 'react';
import Logo from '../assets/images/logo.png';

import { Link } from 'react-router-dom';
function Nav() {
  return (
    <nav className="navbar navbar-expand-md ms-md-3 content container-fluid" id="nav">
      {/* Navbar Toggler (Hamburger Menu) */}
      <button
        className="navbar-toggler"
        type="button"
        style={{ border: '0px', marginTop: '3px', marginLeft: '3px' }}
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div className="wrapper-menu">
          <div className="line-menu half start"></div>
          <div className="line-menu"></div>
          <div className="line-menu half end"></div>
        </div>
      </button>

      {/* Navbar Items */}
      <div className="container py-1">
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-lg-0 text-center text-md-end list-inline">
            <li className="nav-item px-md-1">
              <Link to="/" className="nav-link  navLinks" aria-current="page">Home</Link>
            </li>
            <li className="nav-item px-md-1">
              <Link to="/#texhstack" className="nav-link  navLinks" aria-current="page">TechStack</Link>
            </li>
            <li className="nav-item px-md-1">
              <Link to="/#projects" className="nav-link  navLinks" aria-current="page">Projects</Link>
            </li>
            <li className="nav-item px-md-1">
              <Link to="/about" className="nav-link  navLinks" aria-current="page">About</Link>
            </li>
            <li className="nav-item px-md-1">
              <a href="mailto:MoustaidYoussef@emsi-edu.ma" className="nav-link navLinks">
                Contact
              </a>
            </li>
            <li className="nav-item px-md-1">
              <Link to="/blog" className="nav-link  navLinks" aria-current="page">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
