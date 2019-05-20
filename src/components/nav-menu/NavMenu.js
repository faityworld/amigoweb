import React from 'react';
//import HeaderButton from '../header-button/HeaderButton';
import { Link } from 'react-router-dom';
import './NavMenu.scss';

function NavMenu(props) {

    function clickHandler() {
        if (window.innerWidth < 601 && props.mobileMenu)  props.clickMenuButton(props.clickButton);
    }

    return (
            
            <ul className={ props.mobileMenu ? "nav-list nav-list_mobile" : "nav-list"}>
                <li className={ props.mobileMenu ? "nav-list__item nav-list__item_mobile" : "nav-list__item"} onClick = { clickHandler } >
                    <Link to="/" className={ props.mobileMenu ? "nav-list__link nav-list__link_mobile" : "nav-list__link"}>Home</Link>
                </li>
                <li className={ props.mobileMenu ? "nav-list__item nav-list__item_mobile" : "nav-list__item"} onClick = { clickHandler } >
                    <Link to="/news" className={ props.mobileMenu ? "nav-list__link nav-list__link_mobile" : "nav-list__link"}>News</Link>
                </li>
                <li className={ props.mobileMenu ? "nav-list__item nav-list__item_mobile" : "nav-list__item"} onClick = { clickHandler } >
                    <Link to="/profile" className={ props.mobileMenu ? "nav-list__link nav-list__link_mobile" : "nav-list__link"}>Profile</Link>
                </li>
            </ul>

    )
}

export default NavMenu;