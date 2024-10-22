import React from "react";
import { mock3, mock4 } from "../../config/constants";
import Dropdown from "../../ui-kit/Dropdown/Dropdown";
import Dropdownnumbers from "../../ui-kit/Dropdownnumbers/Dropdownnumbers";
import Filter from "../../ui-kit/Filter/Filter";

const Sort = () => {
  return (
    <div className="flex justify-between gap-[100px]">
      <Filter />
      <div className="flex flex-row gap-[20px]">
        <span className="flex items-center justify-center font-[var(--Nunito-sans)] text-[18px] leading-[130%] text-[var(--blue-light)]">
          Сортировка по
        </span>
        <Dropdown array={mock3} />
      </div>
      <div className="flex items-center gap-[20px]">
        <p className="psortmenu">Показывать по</p>
        <Dropdownnumbers array={mock4} />
      </div>
    </div>
  );
};

export default Sort;
