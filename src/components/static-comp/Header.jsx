import React from 'react';
import logo from '../img/logo.png';

const Header = () => {
    return (
        <header className="App-header">
            <img src={ logo }
                alt="Бессмертный Род"
                className='header-logo' />
            <a href="#" className="header-link">Бессмертный Род</a>
            <div className="header-login">login</div>
        </header>
    );
}

export default Header;