import React from 'react';
import {mock2} from "../../config/constants";
import {HeartIcon2, Wagon} from "../../ui-kit/icons";

const Choise2dish = () => {
    return (
        <div className="choise2">
            {mock2.map((item) => <div key={Math.random()} className="choosen2">
                <img className="svgchoise2" src={item.image} alt="teagreen"/>
                <svg className="likefavorite2" width="48" height="49" viewBox="0 0 48 49" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M24 40.8301C24 40.8301 5.25 30.3301 5.25 17.5801C5.25 15.3261 6.03093 13.1418 7.45991 11.3987C8.8889 9.65562 10.8777 8.46147 13.0879 8.01943C15.2981 7.57739 17.5931 7.91477 19.5826 8.97416C21.5721 10.0336 23.1331 11.7495 24 13.8301C24.8669 11.7495 26.4279 10.0336 28.4174 8.97416C30.4069 7.91477 32.7019 7.57739 34.9121 8.01943C37.1223 8.46147 39.1111 9.65562 40.5401 11.3987C41.9691 13.1418 42.75 15.3261 42.75 17.5801C42.75 30.3301 24 40.8301 24 40.8301Z"
                        stroke="#B5EAEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="flex-col">
                <h1 className="h1choise2">{item.title}</h1>
                <p className="p1choise2">{item.description}</p>
                    <div>
                    <span className="price2">{item.price}</span>
                   <span className="discount2">{item.price}</span>
                </div>
                </div>
                <HeartIcon2/>
                <div className="likeandprice">
                    <button className="buttonchoise2">
                       <Wagon/>
<span>В корзину</span>
                    </button>
                </div>
            </div>)}
        </div>
    );
};

export default Choise2dish;