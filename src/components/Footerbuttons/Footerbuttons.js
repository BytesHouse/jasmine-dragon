"use client";
// import Strelka from "../../assets/Images/Strelka.svg";
import Link from "next/link";
import { useState } from "react";
import Cup from "../../../public/assets/Icons/Cup";
import TeaLeaves from "../../../public/assets/Icons/TeaLeaves";
import Image from "next/image";
import Strelka from "../../../public/assets/Icons/Strelka";
import SwitchLanguage from "../../ui-kit/SwitchLanguge/SwitchLanguge";
import { useLocale } from "next-intl";

const Footerbuttons = ({ isVertical = false }) => {
  const [isShopShow, setIsShopShow] = useState(false);
  const lang = useLocale();

  return (
    <ol
      className={
        !isVertical
          ? `grid grid-cols-half gap-[var(--gutter)] justify-between col-start-7 col-end-13 footer-ol`
          : `flex flex-col gap-[var(--gutter)] footer-ol py-[25px]`
      }
    >
      <div className="flex flex-col gap-[25px] col-span-3">
        <li>
          <Link href={`/${lang}`} className="footerbutton">
            О нас
          </Link>
        </li>
        <li>
          <Link href={`/${lang}/menu`} className="footerbutton">
            Меню
          </Link>
        </li>
        <li>
          <Link href={`/${lang}`} className="footerbutton">
            Магазин
          </Link>
          <button
            onClick={() => setIsShopShow(!isShopShow)}
            className={`ml-[15px] self-end transition ${
              isShopShow && "-rotate-180"
            }`}
          >
            <Strelka />
          </button>
        </li>
        {isShopShow && (
          <div
            id="footerShop"
            className={`flex flex-col gap-[10px] -mt-[10px] transition`}
          >
            <Link href={`/${lang}`}>
              <Cup />
              Посуда
            </Link>
            <Link href={`/${lang}`}>
              <TeaLeaves />
              Чай на развес
            </Link>
          </div>
        )}
        <li>
          <Link href={`/${lang}`} className="footerbutton">
            Корзина
          </Link>
        </li>
      </div>
      <div className="flex flex-col gap-[25px] col-span-3">
        <li>
          <Link href={`/${lang}`} className="footerbutton">
            Профиль
          </Link>
        </li>
        <li>
          <Link href={`/${lang}`} className="footerbutton">
            Избранное
          </Link>
        </li>
        <li>
          <Link href={`/${lang}`} className="footerbutton">
            Карьера
          </Link>
        </li>
        <li>
          <Link href={`/${lang}`} className="footerbutton">
            Контакты
          </Link>
        </li>
        <li>
          <p className="footerbutton">Язык</p>
          <SwitchLanguage />
        </li>
      </div>
    </ol>
  );
};

export default Footerbuttons;
