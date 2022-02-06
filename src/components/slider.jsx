import React from 'react';
import s from './CSS-moduls/slider.module.css';
import logo from '../img/twitter-bird.png'

const Slider = () => {
    return(
        <div className={s.main}>
            <div className={s.block}>
                <img src={logo} alt="" className={s.logo}/> <br/>
                <p className={s.name}><a href="">AOS New York @aod</a> / 35 min</p> <br/>
                <p className={s.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid architecto atque commodi culpa dignissimos doloremque, dolorum et exercitationem libero magnam molestiae numquam, obcaecati optio praesentium quis rem rerum temporibus.</p> <br/>
                <div>
                    <div className={s.krug}></div>
                    <div className={s.krug}></div>
                    <div className={s.krug}></div>
                </div>
            </div>
        </div>
    );
}

export default Slider;