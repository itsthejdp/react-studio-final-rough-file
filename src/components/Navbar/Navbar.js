import React from 'react';
import logo from "../../logo.png";
import "./navbar.scss";


export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="studio-finder" />
            <ul className="nav-links">
            <li><a href="/" className="nav-link">
              home
            </a>
            </li>
            <li><a href="/" className="nav-link">
              about us
            </a>
            </li>
            <li><a href="/" className="nav-link">
              studios
            </a>
            </li>
            </ul>
        </nav>
    )
}
