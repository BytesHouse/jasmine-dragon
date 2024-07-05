"use client";

import { useEffect, useState } from "react";
// import logo from "../../../public/assets/Images/Logo.svg";
import {
  BagIcon,
  BurgerIcon,
  HeartIcon,
  ProfileIcon,
} from "../../ui-kit/icons";
// import { useTranslation } from "react-i18next";
// import { Link, useLocation } from "react-router-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ImageSection from "../ImageSection/Imagesection";
import { Footerbuttons1, Footerbuttons2 } from "../index";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  //   const { t } = useTranslation("Header");
  //   const { pathname } = useLocation();
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <header className="container !py-0">
      <div className="flex justify-between items-center py-4 border-b border-blue-light grid-column">
        <div className="flex justify-between w-full flex-grow">
          <Link href="/">
            <div className="flex items-center gap-6">
              <img src="/assets/Images/Logo.svg" alt="logo" />
              <p className="logo-text flex items-center gap-6 text-2xl text-[var(--blue-light)] leading-relaxed">
                Jasmine Dragon
              </p>
            </div>
          </Link>
          <div className="relative flex items-center gap-6 pr-3">
            <HeartIcon />
            <button className="flex items-center gap-4 rounded-[30px] pl-6 bg-transparent font-semibold text-lg leading-[130%] text-[var(--blue-light)] border border-[var(--blue-light)] shadow-md">
              Профиль <ProfileIcon />
            </button>
            <BagIcon />
            <div className="absolute w-6 h-6 bg-[var(--blue-light)] rounded-full top-0 left-80">
              <p className="numberofitems">0</p>
            </div>
          </div>
        </div>
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="items-center justify-center font-[var(--Nunito-sans)] text-xs leading-[130%] text-[var(--blue)] h-6 hidden _1024:flex"
        >
          <BurgerIcon />
          <span className="font-[var(--Nunito-sans)] text-[var(--blue-light)] ">
            {/* {t("hello")} */}
            Меню
          </span>
        </div>
      </div>
      {showMenu && (
        <div className="flex gap-[50px]">
          <ImageSection />
          <div className="flex flex-col pt-[30px] gap-[25px]">
            <Footerbuttons1 />
            <Footerbuttons2 />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
