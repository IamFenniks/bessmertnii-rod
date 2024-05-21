import React from 'react';
import css from './Nav.module.css'
import { Link } from 'react-router-dom';

// className={ `${css.one} ${css.two}` } - склеивание стилей

const Nav = () => {
    return (
        <nav className='appNav'>
            <div className={css.li}>
                <Link to="profile">
                    Profile
                </Link>
            </div>
            <div className={css.li}>
                <Link to="chat">
                    Dialogs
                </Link>
            </div>
            <div className={css.li}>
                <Link to="news">
                    News
                </Link>
            </div>
            <div className={css.li}>
                <Link to="music">
                    Music
                </Link>
            </div>
            <div className={css.li}>
                <Link to="settings">
                    Settings
                </Link>
            </div>

        </nav>
    );
}

export default Nav;