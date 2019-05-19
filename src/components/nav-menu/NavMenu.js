import React from 'react';
//import HeaderButton from '../header-button/HeaderButton';
import { Link } from 'react-router-dom';
import './NavMenu.scss';

function NavMenu() {
    return (
            
            <ul className="nav-list">
                <li className="nav-list__item"><Link to="/" className="nav-list__link">Home</Link></li>
                <li className="nav-list__item"><Link to="/news" className="nav-list__link">News</Link></li>
                <li className="nav-list__item"><Link to="/profile" className="nav-list__link">Profile</Link></li>
            </ul>

    )
}

export default NavMenu;