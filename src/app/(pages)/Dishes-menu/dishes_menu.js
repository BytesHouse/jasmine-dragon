import React from 'react';
import {Header} from "../../components";
import ContenterSubHeader2 from "../teas_menu/components/ContentSubHeader2/ContenterSubHeader2";


import Footer from "../Main/components/Footer/Footer";
import Direction from './components/Direction/Direction';
import MenuforDishes from './components/Menufordishes/Menufordishes';

const Dishes_menu = () => {
    return (
        <div className="container">
        <Header/>
        <ContenterSubHeader2/>
        <Direction/>
        <MenuforDishes/>
        <Footer/>
</div>
    );
};
export default Dishes_menu;