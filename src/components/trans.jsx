import React from 'react';
import s from './CSS-moduls/trans.module.css';
import logo from "../img/vintage-logo.png";
import Info_block from "./mini_info_block";

const Trans = () => {
    return(
        <div className={s.main}>
            <Info_block/>
            <div className={s.second_img}></div>
            <div className={s.main_img}>
                <img src={logo} alt="" className={s.main_logo}/>
            </div>
        </div>
    );
}

export default Trans;