import React from 'react';
import s from './CSS-moduls/bike.module.css';
import Info_block from "./mini_info_block";
import logo from '../img/bicycles-sml-logo.png';

const Bike = () => {
    return(
        <div className={s.main}>
            <div className={s.first__block}>
                <img src={logo} alt="" className={s.logo}/>
            </div>
            <Info_block />
            <div className={s.mini__block}>

            </div>
            <div className={s.second__block}>

            </div>
        </div>
    );
}

export default Bike;