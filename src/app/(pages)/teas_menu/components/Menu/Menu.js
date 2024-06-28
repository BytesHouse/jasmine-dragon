import React from 'react';
import Filters from "../../../../components/Filters/Filters";
import {Hotsales, Lables, Pagination} from "../../../../components";
import Recently_viewed from "../../../../components/Recently_viewed/Recently_viewed";

const Menu = () => {
    return (
        <div className="section3">
            <h1 className="h1sec2-1">Чайное меню</h1>
            <Filters/>
            <Lables/>
            <Hotsales/>
            <Pagination/>
            <Recently_viewed/>
            <Pagination/>
        </div>
    );
};

export default Menu;