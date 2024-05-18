import React from 'react';
import css from '../../css/static-css/Footer.module.css'
// className={ `${css.one} ${css.two}` } - склеивание стилей

const Footer = () => {
    return (
        <footer className='appFooter'>
            Подвал
        </footer>
    );
}

export default Footer;