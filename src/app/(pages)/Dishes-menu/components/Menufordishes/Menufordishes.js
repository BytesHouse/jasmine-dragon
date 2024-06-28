import React from 'react';
import { Filterdish } from '../../../../components';
import {Hotsales, Lables, Pagination} from "../../../../components";
import RecentlyViewed from '../../../../components/Recently_viewed/Recently_viewed';

const MenuforDishes = () => {
    return (
        <div className="section3">
            <h1 className="h1sec2-1">Посуда</h1>
            <Filterdish/>
            <Lables/>
            <Hotsales/>
            <Pagination/>
            <RecentlyViewed/>
            <Pagination/>
        </div>
    );
};

export default MenuforDishes;