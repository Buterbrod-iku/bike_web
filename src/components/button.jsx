import React from 'react';
import s from './CSS-moduls/button.module.css';
import Solo from "./buttoncomponents/solo";
import Hei from "./buttoncomponents/hei";
import Wid from "./buttoncomponents/wid";

const Button = () => {
    return(
        <div className={s.main}>
                <Solo name="ff"/>
                <Solo name="block"/>
                <Wid name3="ff_g"/>
                <Hei name2="ff_v"/>
                <Hei name2="block_v"/>
                <Wid name3="block_g"/>
                <Solo name="ff2"/>
                <Solo name="block2"/>
        </div>
    );
}

export default Button;