import React from 'react';
import s from './header.module.css';

const Menu = () => {
    return(
        <header className={s.head}>
            <div className={s.logo}></div>
            <div className={s.buy}>
                <p>Buy now</p>
            </div>
        </header>
    );
}

const Header = () => {
    return (
        <div>
            <div className={s.bac}>
                <Menu />
            </div>
            <div className={s.pos}>
                <div className={s.name}>Noeform</div>
            </div>
        </div>
    );
};

export default Header;