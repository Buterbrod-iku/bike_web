import React from 'react';
import all from './App.css';
import Menu from './components/menu';
import Main_info from "./components/main_info";
import Flame from "./components/frame";
import Info_block from "./components/mini_info_block";
import Trans from "./components/trans";
import Bike from "./components/bike";
import Button from "./components/button";
import Slider from "./components/slider";
import Discover from "./components/discover";
import Mail from "./components/mail";
import Footer from "./components/footer";

const App = () => {
    return (
        <div>
            <Menu />
            <div className="bg"></div>
            <Main_info />
            <Flame />
            <Trans/>
            <Bike />
            <Slider />
            <Button />
            <Discover />
            <Mail />
            <Footer />
        </div>
    );
}

export default App;
