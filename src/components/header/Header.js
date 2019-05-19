import React from 'react';
import NavMenu from '../nav-menu/NavMenu';
import LoginButton from '../login-button/LoginButton';
import { Link } from 'react-router-dom';
import HeaderButton from '../header-button/HeaderButton';
import './Header.scss';

function Header(props) {

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" href="#" className="header__logo">LOGO</Link>
                <nav className={props.clickButton ? "nav nav_open" : "nav"}>
                    <HeaderButton clickButton={ props.clickButton } clickMenuButton = { props.clickMenuButton } floatRight = "header__button_right" />
                    <NavMenu mobileMenu ={true} clickButton={ props.clickButton } clickMenuButton = { props.clickMenuButton } />
                </nav>
                <LoginButton login ={props.login} logOut={ props.logOut } />
                <HeaderButton clickButton={ props.clickButton } clickMenuButton = { props.clickMenuButton } />
            </div>
        </header>
    )
}

export default Header;