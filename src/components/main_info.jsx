import React from 'react';
import info from './CSS-moduls/main-info.module.css';
import ico from './../img/cog-icon.png';

const Main_info = () => {
    return(
        <div className={info.main}>
            <img src={ico} alt="" className={info.img}/>
            <h2>A NEW GENERATION OF VINTAGE BIKE</h2>
            <div className={info.block}>
                <p className={info.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
        </div>
    );
}

export default Main_info;