import React from 'react';
import strelka from  "..//..//..//..//assets/Images/Strelka.svg";

const Direction = () => {
    return (
        <div className="colorforborder">
            <button className="fortext">
                <a href="index.html">Главная</a>
            </button>
            <button>
                <img src={strelka} alt="strelka"/>
        </button>
                <button className="fortext">
                    <a href="index.html">Посуда</a>
                </button>
        </div>
);
};

export default Direction;