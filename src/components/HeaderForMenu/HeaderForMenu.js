"use client";

import { useState } from "react";
// import logo from "../../../public/assets/Images/Logo.svg";
import { BurgerIcon, Closebutton } from "@/ui-kit/icons";
// import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";

const HeaderForMenu = () => {
  const [showOtherComponent, setShowOtherComponent] = useState(false);

  // Функция для переключения видимости компонента
  const toggleComponent = () => {
    setShowOtherComponent(!showOtherComponent);
  };
  //   const { t } = useTranslation();
  return (
    <header>
      <div className="flex justify-between items-center py-4 border-b border-[var(--blue-light)]">
        <Link href="/">
          <div className="flex items-center gap-6">
            <Image
              src="/assets/Images/Logo.svg"
              alt="logo"
              width={81}
              height={90}
            />
            <p className="logo-text flex items-center gap-6 text-2xl text-[var(--blue-light)] leading-relaxed">
              Jasmine Dragon
            </p>
          </div>
        </Link>
        <div
          onClick={toggleComponent}
          className="flex flex-row mt-[10px] items-center gap-[15px] justify-center font-[var(--Nunito-sans)] text-xs leading-[130%] text-[var(--blue-light)] h-6"
        >
          <button
            onClick={toggleComponent}
            className="flex gap-[15px] items-center font-semibold text-[18px] leading-[130%]"
          >
            {showOtherComponent ? <Closebutton /> : <BurgerIcon />}
            {/* {showOtherComponent ? t("Закрыть") : t("hello")} */}
            {showOtherComponent ? "Закрыть" : "hello"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderForMenu;
