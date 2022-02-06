import React from 'react';
import s from './css/wid.module.css';
import logo from '../../img/white-bike-icon.png';

const Wid = (props) => {

    let gog = props.name3;

    return(
        <div className={gog}>
            <div className="hover__content">
                <p className="p__con">
                    <img src={logo} alt=""/>
                    <p className="ppp">VeloShop</p>
                </p>
            </div>
        </div>
    );
}

export default Wid;