import React from 'react';
import NavMenu from '../nav-menu/NavMenu';
import LoginButton from '../login-button/LoginButton';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header(props) {
    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" href="#" className="header__logo">LOGO</Link>
                <nav className="nav">
                    <NavMenu />
                </nav>
                <LoginButton login ={props.login} logOut={ props.logOut } />
            </div>
        </header>
    )
}

export default Header;