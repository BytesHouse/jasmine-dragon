import React from "react";
import coffee from '..//..//..//..//assets/Images/cofee-table.png';
import rect from '..//..//..//..//assets/Images/Rectangle.png';
import Lines from "../../../../components/Lines/Lines";

const ContentSubHeader1 = () => {
    const handleClickChay = () => {
        alert('Чай');
    }
    return (
        <div className='grid-column'>
            <div className="navigation">
                <img id="coffee-table" src={coffee} alt="cofee-table"/>
                <div className="textforheader flexcolumtext">
                    <h3 id="h3" className="colorfortext">Всегда рады Вас видеть в Jasmine Dragon</h3>
                    <h1 id="h1" className="colorfortext">Где чай расскажет вам историю вкуса</h1>
                    <p id="ptext" className="colorfortext">Добро пожаловать в нашу уютную чайную лавку, где каждая
                        чашечка - это история вкуса и аромата. Мы предлагаем широкий выбор классических сортов и
                        уникальных ароматизированных смесей, чтобы угодить вашему вкусу и удовлетворить любые чайные
                        желания.</p>
                    <div className="positforbutt2">
                        <button onClick={handleClickChay} className="button3" id="button2">Чаи</button>
                        <button className="button3">Посуда</button>
                    </div>

                </div>
                <img id="widthforpic" src={rect} alt="bigphoto"/>
            </div>
            <Lines/>
        </div>
    );
};

export default ContentSubHeader1;