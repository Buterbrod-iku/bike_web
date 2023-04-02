import React from 'react';
import s from './CSS-moduls/menu.module.css';
import logo from './../img/main-logo.png';

const Menu = () => {
    return(
      <div className={s.menu}>
          <a href=""><li>ABOUT US</li></a>
          <a href=""><li>WORK</li></a>
          <img src={logo} alt="" className={s.img}/>
          <a href=""><li>SHOP</li></a>
          <a href=""><li>CONTACT</li></a>
      </div>
    );
}

export default Menu;