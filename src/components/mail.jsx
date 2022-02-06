import React from 'react';
import s from './CSS-moduls/mail.module.css';
import logo from '../img/main-logo.png'

const Mail = () => {
    return(
        <div className={s.main}>
            <img src={logo} alt="" className={s.logo}/>
            <p className={s.name}>Stay on the saddle!</p>
            <div className={s.flex}>
                <input type="text" placeholder="enter your email..." className={s.input}/>
                <button className={s.button}>
                    GO
                </button>
            </div>
        </div>
    );
}

export default Mail;