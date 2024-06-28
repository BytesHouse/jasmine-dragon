import React from 'react';
import {Header} from "../../components";
import ContenterSubHeader2 from "./components/ContentSubHeader2/ContenterSubHeader2";
import Direction from "../../components/Direction/Direction";
import Menu from "./components/Menu/Menu";
import Footer from "../Main/components/Footer/Footer";





const TeasMenu = () => {
    return (
        <div className="container">
        <Header/>
        <ContenterSubHeader2/>
        <Direction/>
            <Menu/>
<Footer/>
</div>
    );
};

export default TeasMenu;