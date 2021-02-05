import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="nav">
            <div className="nav__logo">
                <img src="./Images/logo.png" alt=""/>
            </div>

            <ul className="nav__ul">
                <li className="nav__li">
                    <Link to="/" className="nav__link">Home</Link>
                </li>
                <li className="nav__li">
                    <Link to="/Search" className="nav__link">Search</Link>
                </li>
            </ul>
        </nav>
    )
}
