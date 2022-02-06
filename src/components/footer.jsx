import React from 'react';
import s from './CSS-moduls/footer.module.css';
import twitter from '../img/twitter-icon.png';
import facebook from '../img/facebook-icon.png';
import xz from '../img/pintrest-icon.png';
import imp from '../img/yebo-icon.png';

const Footer = () => {
    return(
        <div className={s.main}>
            <div className={s.first}>
                <p className={s.p_first}><b>AOD New York</b> <br/>
                2250 Lexington Avenue <br/>
                New York, NY 10035 - <a href="">info@domain.com</a></p>
            </div>
            <div className={s.second}>
                <a href="">
                    <img src={twitter} className={s.twitter}/>
                </a><a href="">
                    <img src={facebook} className={s.facebook}/>
                </a><a href="">
                    <img src={xz} className={s.xz}/>
                </a>
            </div>
            <div className={s.tree}>
                <p>Designed by <img src={imp} alt=""/></p>
                <p>Developed by <a href="">Peter</a></p>
            </div>
        </div>
    );
}

export default Footer;