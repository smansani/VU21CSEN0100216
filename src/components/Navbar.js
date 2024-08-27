import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h2>GO MART</h2>
                <div className="navbar-links">
                    <Link className="nav-link" to="/">Home</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
