import React from 'react';
import {Header, Pagination} from "../../components";
import Direction from ".//components/Direction/Direction"
import Footer from "../Main/components/Footer/Footer";
import Choiseitems from './components/Chosenitems/Chosenitems';
import Likeitems from './components/Likeditems/likeitems';
const SelectedMenu = () => {
    return (
        <div className="container">
        <Header/>
        <Direction/>
        <div className="section3">
            <Choiseitems/>
            <Likeitems/>
            <Pagination/>
            </div>
<Footer/>
</div>
    );
};

export default SelectedMenu;