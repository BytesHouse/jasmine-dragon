import React from 'react';
import strelka from  "..//..//..//..//assets/Images/Strelka.svg";

const DirectionForProfile = () => {
    return (
        <div className="flex flex-row items-center py-4 border-b border-[var(--blue-light)] gap-[25px]">
            <button className="fortext">
                <a href="index.html">Главная</a>
            </button>
            <button>
                <img src={strelka} alt="strelka"/>
        </button>
                <button className="fortext">
                    <a href="index.html">Профиль</a>
                </button>
        </div>
);
};

export default DirectionForProfile;