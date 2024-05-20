import React from 'react';
import css from './Nav.module.css'

// className={ `${css.one} ${css.two}` } - склеивание стилей

const Nav = () => {
    return (
        <nav className='appNav'>
            <div className={css.li}>
                <a href="">
                    Profile
                </a>
            </div>
            <div className={css.li}>
                <a href="">
                    Messages
                </a>
            </div>
            <div className={css.li}>
                <a href="">
                    News
                </a>
            </div>
            <div className={css.li}>
                <a href="">
                    Music
                </a>
            </div>
            <div className={css.li}>
                <a href="">
                    Settings
                </a>
            </div>

        </nav>
    );
}

export default Nav;