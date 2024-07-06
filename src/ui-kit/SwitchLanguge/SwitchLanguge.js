"use client";

import { useState } from "react";
import { Arrowdown, Arrowup } from "../icons";
import { locales } from "@/i18n";
import Link from "next/link";

const SwitchLanguage = () => {
  const [isShow, setIsShow] = useState(false);
  const [choice, setChoice] = useState(locales[0]);

  const handleChangeIsShow = () => setIsShow(!isShow);

  const handleChangeChoice = (item) => {
    setChoice(item);
    handleChangeIsShow();
  };

  return (
    <div
      onClick={handleChangeIsShow}
      className={`${
        !isShow ? "rounded-b-[20px]" : "rounded-b-[0px]"
      } ml-[15px] w-[100px] flex rounded-[20px] px-[15px] py-[5px] self-end text-xl items-center border border-[var(--blue-light)] text-[var(--blue-light)] relative`}
    >
      <div>
        <div className="flex items-center gap-[15px]">
          <h5 className="simple w-auto capitalize">{choice}</h5>
          {isShow ? <Arrowdown /> : <Arrowup />}
        </div>
        {isShow && (
          <ul className="absolute top-[100%] -left-[1px] w-[100px]">
            {locales.map((item, index) => (
              <li
                className="hover:bg-blue cursor-pointer last:rounded-b-2xl  border-x border-b capitalize"
                onClick={() => handleChangeChoice(item)}
                key={index}
              >
                <Link
                  className="w-full block py-[5px] px-[15px]"
                  href={`/${item}`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SwitchLanguage;
