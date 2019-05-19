import React from 'react';
import NavMenu from '../nav-menu/NavMenu';
import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
            <NavMenu />
            </div>
        </footer>
    )
}

export default Footer;