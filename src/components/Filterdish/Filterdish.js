"use client";

import { useState } from "react";
import Sort from "../Sort/Sort";
import { Choise2dish, Choisedish } from "..";
const Filterdish = () => {
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
      <div className="row1sort">
        <Sort />
        <div className="thelastsort">
          <p className="psortmenu">Вид товара:</p>
          <button
            onClick={toggleHorizontalView}
            className="thelastsvg"
            id="margin20px"
          >
            <svg
              className="hover1"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 6.75H6.75V15.75H15.75V6.75Z"
                fill="#2F4A4C"
                stroke="#2F4A4C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M29.25 6.75H20.25V15.75H29.25V6.75Z"
                fill="#2F4A4C"
                stroke="#2F4A4C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.75 20.25H6.75V29.25H15.75V20.25Z"
                fill="#2F4A4C"
                stroke="#2F4A4C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M29.25 20.25H20.25V29.25H29.25V20.25Z"
                fill="#2F4A4C"
                stroke="#2F4A4C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button onClick={toggleVerticalView} className="thelastsvg">
            <svg
              className="hover1"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.25 20.25H6.75C6.12868 20.25 5.625 20.7537 5.625 21.375V27C5.625 27.6213 6.12868 28.125 6.75 28.125H29.25C29.8713 28.125 30.375 27.6213 30.375 27V21.375C30.375 20.7537 29.8713 20.25 29.25 20.25Z"
                stroke="#2F4A4C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M29.25 7.875H6.75C6.12868 7.875 5.625 8.37868 5.625 9V14.625C5.625 15.2463 6.12868 15.75 6.75 15.75H29.25C29.8713 15.75 30.375 15.2463 30.375 14.625V9C30.375 8.37868 29.8713 7.875 29.25 7.875Z"
                stroke="#2F4A4C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
      {isHorizontal ? <Choisedish /> : <Choise2dish />}
    </div>
  );
};
export default Filterdish;
