import React from 'react';
import logo from '../../../img/logo.png';
import css from './Header.module.css'

const Header = () => {
    return (
        <header className="appHeader">
            <img src={ logo }
                alt="Бессмертный Род"
                className={ css.headerLogo } />
            <a href="#" className={ css.headerLink }>
                Бессмертный Род
            </a>
            <div className={ css.headerLogin }>login</div>
        </header>
    );
}

export default Header;