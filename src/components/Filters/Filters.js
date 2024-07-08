"use client";

import { useState } from "react";
import Choise from "../Choise/Choise";
import Choise2 from "../Choise2/Choise2";
import Sort from "../Sort/Sort";
import ChocoMenu from "@/ui-kit/icons/ChocoMenu/ChocoMenu";
import LineMenu from "@/ui-kit/icons/LineMenu/LineMenu";
import CloseMini from "../../../public/assets/icons/CloseMini";

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
    <>
      <div className="container !gap-[25px] !py-[50px]">
        <div className="flex justify-between flex-row gap-12 col-span-full">
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
        {/* <div className="row2sortmenu col-span-full">
          <button className="buttonsec3">
            Черные чаи
            <CloseMini />
          </button>
          <button className="buttonsec3">
            Оолонг
            <CloseMini />
          </button>
          <button className="buttonsec3">
            Черные чаи
            <CloseMini />
          </button>
          <button className="buttonsec3">
            Красные чаи
            <CloseMini />
          </button>
          <button className="buttonsec3">
            Зеленые чаи
            <CloseMini />
          </button>
        </div> */}
      </div>
      {isHorizontal ? <Choise /> : <Choise2 />}
    </>
  );
};
export default Filters;
