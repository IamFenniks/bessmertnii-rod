import React from 'react';
import css from './Nav.module.css'

// className={ `${css.one} ${css.two}` } - склеивание стилей

const Nav = () => {
    return (
        <nav className='appNav'>
            <div className={css.li}>
                <a href="/profile">
                    Profile
                </a>
            </div>
            <div className={css.li}>
                <a href="/chat">
                    Dialogs
                </a>
            </div>
            <div className={css.li}>
                <a href="/news">
                    News
                </a>
            </div>
            <div className={css.li}>
                <a href="/music">
                    Music
                </a>
            </div>
            <div className={css.li}>
                <a href="/settings">
                    Settings
                </a>
            </div>

        </nav>
    );
}

export default Nav;