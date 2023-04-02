import React from 'react';
import s from './css/solo.module.css';
import logo from '../../img/white-bike-icon.png';

const Solo = (props) => {

    let gog = props.name;

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

export default Solo;