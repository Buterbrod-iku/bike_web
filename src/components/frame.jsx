import React from 'react';
import g from './CSS-moduls/frame.module.css';
import logo from './../img/bicycle-logo.png';
import ico from './../img/frame-icon.png';
import Info_block from "./mini_info_block";

const Flame = () => {
    return(
        <div className={g.main}>
            <div className={g.main_img}>
                <img src={logo} alt="" className={g.main_logo}/>
            </div>
            <Info_block />
            <div className={g.second_img}></div>
        </div>
    );
}

export default Flame;