"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { locales } from "@/i18n";
import Link from "next/link";
import { useLocale } from "next-intl";
import Strelka from "../icons/Strelka/Strelka";

const SwitchLanguage = () => {
  const lang = useLocale();
  const [isShow, setIsShow] = useState(false);
  const [choice, setChoice] = useState(lang);

  let pathName = usePathname();
  // pathName = pathName.slice(3, pathName.length);
  pathName = pathName.replace(/^.{3}/, "");
  // console.log(pathName);

  const handleChangeIsShow = () => setIsShow(!isShow);

  const handleChangeChoice = (item) => {
    setChoice(item);
    handleChangeIsShow();
  };

  return (
    <div
      onClick={handleChangeIsShow}
      className={`${
        !isShow ? "rounded-b-[16px]" : "rounded-b-[0px]"
      } ml-[15px] w-[102px] flex rounded-[16px] px-[15px] py-[5px] self-end text-xl items-center border border-[var(--blue-light)] text-[var(--blue-light)] relative hover:cursor-pointer`}
    >
      <div className="flex items-center gap-[15px]">
        <h5 className="simple w-auto capitalize">{choice}</h5>
        <Strelka
          className={`transition ${isShow && "rotate-90"}`}
          isMini={true}
        />
      </div>
      {isShow && (
        <ul className="absolute top-[100%] -left-[1px] w-[102px]">
          {locales.map(
            (item, index) =>
              choice !== item && (
                <li
                  className="hover:bg-blue cursor-pointer last:rounded-b-2xl  border-x border-b capitalize"
                  onClick={() => handleChangeChoice(item)}
                  key={index}
                >
                  <Link
                    className="w-full block py-[5px] px-[15px] text-h5"
                    href={`/${item}${pathName}`}
                  >
                    {item}
                  </Link>
                </li>
              )
          )}
        </ul>
      )}
    </div>
  );
};

export default SwitchLanguage;
