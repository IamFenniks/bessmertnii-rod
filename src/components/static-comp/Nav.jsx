import React from 'react';
import css from '../../css/static-css/Nav.module.css'

// className={ `${css.one} ${css.two}` } - склеивание стилей

const Nav = () => {
    return (
        <nav className='appNav'>
            <div className={ css.li }>

                Profile

            </div>
            <div className={ css.li }>

                Messages

            </div>
            <div className={ css.li }>

                News

            </div>
            <div className={ css.li }>

                Music

            </div>
            <div className={ css.li }>

                Settings

            </div>

        </nav>
    );
}

export default Nav;