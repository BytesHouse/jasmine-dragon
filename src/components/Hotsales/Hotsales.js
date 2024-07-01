import {mock2} from "../../config/constants";

const Hotsales = () => {
    return (
        <div className="hotsales">
            <h1 className="h1sec2-1">Хиты продаж</h1>
            <div className="options">
                <button className="buttonhotsale">Меню</button>
                <button className="buttonhotsale">Чаи</button>
                <button className="buttonhotsale">Посуда</button>
            </div>
            <div className="sorthotsale">
                {mock2.slice(0, 3).map((item) => <div key={Math.random()} className="choosen">
                    <img className="svgchoise" src={item.image} alt="teagreen"/>
                    <svg className="likefavorite" width="48" height="49" viewBox="0 0 48 49" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M24 40.8301C24 40.8301 5.25 30.3301 5.25 17.5801C5.25 15.3261 6.03093 13.1418 7.45991 11.3987C8.8889 9.65562 10.8777 8.46147 13.0879 8.01943C15.2981 7.57739 17.5931 7.91477 19.5826 8.97416C21.5721 10.0336 23.1331 11.7495 24 13.8301C24.8669 11.7495 26.4279 10.0336 28.4174 8.97416C30.4069 7.91477 32.7019 7.57739 34.9121 8.01943C37.1223 8.46147 39.1111 9.65562 40.5401 11.3987C41.9691 13.1418 42.75 15.3261 42.75 17.5801C42.75 30.3301 24 40.8301 24 40.8301Z"
                            stroke="#B5EAEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h1 className="h1choise">{item.title}</h1>
                    <p className="p1choise">{item.description}</p>
                    <div className="likeandprice">
                        <button className="buttonchoise">
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M25.875 26.2051H9.81563L5.89219 4.6332C5.84628 4.37487 5.71152 4.1407 5.51122 3.97122C5.31092 3.80173 5.05768 3.70759 4.79531 3.70508H2.25"
                                    stroke="#B5EAEE" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M11.25 31.8301C12.8033 31.8301 14.0625 30.5709 14.0625 29.0176C14.0625 27.4643 12.8033 26.2051 11.25 26.2051C9.6967 26.2051 8.4375 27.4643 8.4375 29.0176C8.4375 30.5709 9.6967 31.8301 11.25 31.8301Z"
                                    stroke="#B5EAEE" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M25.875 31.8301C27.4283 31.8301 28.6875 30.5709 28.6875 29.0176C28.6875 27.4643 27.4283 26.2051 25.875 26.2051C24.3217 26.2051 23.0625 27.4643 23.0625 29.0176C23.0625 30.5709 24.3217 31.8301 25.875 31.8301Z"
                                    stroke="#B5EAEE" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M8.78906 20.5801H26.4516C26.9775 20.5817 27.4871 20.3979 27.8909 20.0609C28.2947 19.724 28.5668 19.2556 28.6594 18.7379L30.375 9.33008H6.75"
                                    stroke="#B5EAEE" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="discount">{item.price}</span>
                            {item.price}
                        </button>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Hotsales;