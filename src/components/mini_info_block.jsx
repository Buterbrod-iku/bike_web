import React from 'react';
import s from './CSS-moduls/block.module.css';
import ico from "../img/frame-icon.png";

const Info_block = () => {
    return(
        <div className={s.block_text}>
            <img src={ico} alt="" className={s.ico}/>
            <h2>VINTAGE OLIVA</h2>
            <div className={s.d_text}>
                <p className={s.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.</p>
            </div>
            <hr/>
            <div className={s.triangle}></div>
        </div>
    );
}

export default Info_block;