"use client";

import { useState } from "react";
import { Arrowdown, Arrowup } from "../icons";

const SwitchLanguage = ({ array }) => {
  const [isShow, setIsShow] = useState(false);
  const [choice, setChoice] = useState(array[1].title);

  const handleChangeIsShow = () => setIsShow(!isShow);

  const handleChangeChoice = (item) => {
    setChoice(item.title);
    handleChangeIsShow();
  };

  return (
    <div
      onClick={handleChangeIsShow}
      className={`${
        !isShow ? "rounded-b-[20px]" : "rounded-b-[0px]"
      } w-[100px] flex rounded-[20px] px-[15px] py-[5px] self-end text-xl items-center border border-[var(--blue-light)] text-[var(--blue-light)] relative`}
    >
      <div>
        <div className="flex items-center gap-[15px]">
          {choice}
          {isShow ? <Arrowdown /> : <Arrowup />}
        </div>
        {isShow && (
          <ul className="absolute top-[100%] -left-[1px] w-[100px]">
            {array.map((item) => (
              <li
                className="hover:bg-blue cursor-pointer last:rounded-b-2xl py-[5px] px-[15px] border-x border-b"
                onClick={() => handleChangeChoice(item)}
                key={item.id}
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SwitchLanguage;
