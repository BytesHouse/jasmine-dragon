"use client";

import { useState } from "react";
import Choise from "../Choise/Choise";
import Choise2 from "../Choise2/Choise2";
import Sort from "../Sort/Sort";
import ChocoMenu from "../../ui-kit/icons/ChocoMenu/ChocoMenu";
import LineMenu from "../../ui-kit/icons/LineMenu/LineMenu";

const Filters = () => {
  const [isHorizontal, setIsHorizontal] = useState(true); // Состояние для отслеживания текущего вида товаров
  const [isActive, setIsActive] = useState(false);
  const toggleHorizontalView = () => {
    setIsHorizontal(true);
    toggleActive(); // Установка горизонтального вида
  };
  const toggleVerticalView = () => {
    setIsHorizontal(false);
    toggleActive();
  };

  // Состояние активности

  const toggleActive = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="sortirovka">
      <div className="flex justify-between flex-row gap-12">
        <Sort />
        <div className="thelastsort">
          <p className="psortmenu">Вид товара:</p>
          <button
            onClick={toggleHorizontalView}
            className="thelastsvg"
            id="margin20px"
          >
            <ChocoMenu state={isHorizontal} />
          </button>
          <button onClick={toggleVerticalView} className="thelastsvg">
            <LineMenu state={!isHorizontal} />
          </button>
        </div>
      </div>
      <div className="row2sortmenu">
        <button className="buttonsec3">
          Черные чаи
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.75 5.25L5.25 18.75"
              stroke="#B5EAEE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.75 18.75L5.25 5.25"
              stroke="#B5EAEE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="buttonsec3">
          Оолонг
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.75 5.25L5.25 18.75"
              stroke="#B5EAEE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.75 18.75L5.25 5.25"
              stroke="#B5EAEE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="buttonsec3">
          Черные чаи
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.75 5.25L5.25 18.75"
              stroke="#B5EAEE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.75 18.75L5.25 5.25"
              stroke="#B5EAEE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="buttonsec3">
          Красные чаи
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.75 5.25L5.25 18.75"
              stroke="#B5EAEE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.75 18.75L5.25 5.25"
              stroke="#B5EAEE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="buttonsec3">
          Зеленые чаи
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.75 5.25L5.25 18.75"
              stroke="#B5EAEE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.75 18.75L5.25 5.25"
              stroke="#B5EAEE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {isHorizontal ? <Choise /> : <Choise2 />}
    </div>
  );
};
export default Filters;
