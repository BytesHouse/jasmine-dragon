import ImagesComponent from "../ImagesComponent/ImagesComponent";
import FavoriteButton from "../../../../ui-kit/FavoriteButton/FavoriteButton";
import Counter from "../../../../ui-kit/Counter/Counter";
const DescriptionBlock = ({product}) => {
    const {name, type, subtype, weight, description, strength, brewRes} = product;
    return (
        <section className="flex gap-[25px]">
            <ImagesComponent/>
            <div className="w-full flex flex-col gap-[25px]">
                <h1>{type} «{name}» ({subtype}), {weight}.</h1>
                <FavoriteButton/>
                <strong className="">Описание:</strong>
                <p>{description}</p>
                <strong>Харрактеристики</strong>
                <ul className="list-disc pl-4">
                    <li>Крепость чая: {strength}/10</li>
                    <li>Стойкость к завариванию: {brewRes}/10</li>
                    <li>Сорти чая: {subtype}</li>
                </ul>
                <div className="grid grid-cols-3 gap-[50px]">
                    <Counter/>
                    <button
                        className="cursor-pointer text-[1.5rem] py-[27px] flex justify-center items-center gap-[25px] col-span-2 border border-[var(--blue-light)]">
                        <span>
                        <svg
                            width="23"
                            height="24"
                            viewBox="0 0 23 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L2.19297 0.778755C2.69116 1.27694 2.99811 1.93458 3.06004 2.63639L3.18036 4H22C22.2911 4 22.5678 4.12686 22.7577 4.34744C22.9477 4.56803 23.0321 4.86045 22.9889 5.14834L21.7444 13.445C21.5242 14.9136 20.2626 16 18.7776 16H4.23918L4.33517 17.0879C4.38072 17.6041 4.81308 18 5.3313 18H18C19.6569 18 21 19.3431 21 21C21 22.6569 19.6569 24 18 24C16.3431 24 15 22.6569 15 21C15 20.6494 15.0602 20.3128 15.1707 20H7.82929C7.93985 20.3128 8 20.6494 8 21C8 22.6569 6.65685 24 5 24C3.34315 24 2 22.6569 2 21C2 20.1392 2.36251 19.3632 2.94318 18.8161C2.61057 18.3793 2.39439 17.8471 2.34291 17.2637L1.06778 2.81218C1.04714 2.57824 0.944817 2.35903 0.778755 2.19297L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893ZM18 20C17.4477 20 17 20.4477 17 21C17 21.5523 17.4477 22 18 22C18.5523 22 19 21.5523 19 21C19 20.4477 18.5523 20 18 20ZM4.06271 14H18.7776C19.2726 14 19.6931 13.6379 19.7666 13.1483L20.8388 6H3.35683L4.06271 14ZM5 20C4.44772 20 4 20.4477 4 21C4 21.5523 4.44772 22 5 22C5.55228 22 6 21.5523 6 21C6 20.4477 5.55228 20 5 20Z"
                                      fill="#B5EAEE"/>
                        </svg>
                        </span>
                        <span>В корзину</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DescriptionBlock;