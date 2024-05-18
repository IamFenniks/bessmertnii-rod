import React from 'react';
import css from './Footer.module.css'
// className={ `${css.one} ${css.two}` } - склеивание стилей

const Footer = () => {
    return (
        <footer className='appFooter'>
            Подвал
        </footer>
    );
}

export default Footer;