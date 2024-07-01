import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import Image from "next/image";
// import checkboxdone from "../../../public/assets/Images/Checkdone.svg";

const CheckForOrders = () => {
  return (
    <div className="flex flex-col h-[100%] p-[25px] w-[555px] bg-[var(--green-light)] gap-[15px] not-italic relative">
      <span className="font-[var(--Nunito-sans)] font-semibold text-[40px] font-[700] text-[var(--blue-light)]">
        Ваши Товары
      </span>
      <span className="-mt-[15px]">В корзине 10 товаров</span>
      <div className="flex flex-row justify-between  items-center">
        <span className="text-[25px] font-[600]">Сумма Покупок</span>
        <span className="text-[20px] font-[300]">2,194.45 Lei</span>
      </div>
      <div className="flex flex-row justify-between items-center">
        <span className="text-[25px] font-[600]">Скидка</span>
        <span className="text-[20px] font-[300]">0.25 Lei</span>
      </div>
      <label className="text-[25px] font-[600]">Ввести промо код</label>
      <input
        className="w-[500px]  border border-blue-light bg-[var(--green-light)] py-[25px] pl-[25px] pr-[40px] focus:outline-none"
        type="text"
        placeholder="Введите промо код"
      ></input>
      <svg
        className="absolute mt-[50%] ml-[78%]"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 31.5003C25.4558 31.5003 31.5 25.4561 31.5 18.0003C31.5 10.5444 25.4558 4.50027 18 4.50027C10.5442 4.50027 4.5 10.5444 4.5 18.0003C4.5 25.4561 10.5442 31.5003 18 31.5003Z"
          stroke="#B5EAEE"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M18.8594 22.7675L23.6266 18.0003L18.8594 13.2331"
          stroke="#B5EAEE"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.375 18.0003H23.625"
          stroke="#B5EAEE"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex flex-row justify-between items-center">
        <span className="text-[25px] font-[600]">Доставка</span>
        <span className="text-[20px] font-[500]">Бесплатно</span>
      </div>
      <div className="flex flex-row justify-between items-center border-t border-b py-[25px]">
        <span className="font-[var(--Playfair-Display)] italic font-medium text-[40.5px] leading-[120%]">
          Итого
        </span>
        <span className="font-bold text-[40.5px] leading-[120%]">
          2,194.45 Lei
        </span>
      </div>
      <Checkbox />
      <button className="flex flex-row bg-[var(--blue)] gap-[25px] items-center font-bold text-center text-2xl leading-normal py-[25px] pr-[41px] pl-[50px]">
        <Image
          src="/assets/Images/Checkdone.svg"
          alt="done"
          width={36}
          height={36}
        />
        Продолжить оформление
      </button>
    </div>
  );
};

export default CheckForOrders;
