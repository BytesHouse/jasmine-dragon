"use client";

import Lines from "@/components/Lines/Lines";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
// import "swiper/css/pagination";

const ContentSubHeader1 = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="line ${className}" id="line${index}"></div>`;
    },
  };

  const handleClickTea = () => {
    alert("Чай");
  };
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={pagination}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        spaceBetween={25}
        centeredSlides={true}
        className="container "
      >
        <SwiperSlide>
          <div className="container items-center !py-[50px]">
            {/* <div className="navigation grid-column"> */}
            <div className="col-span-5 gap-[10px] flex flex-col">
              <h5 className="text-[27px]">Ура, у нас новое поступление!</h5>
              <h3 className="font-medium">Tia-guan-in</h3>
              <p className="p1">
                Добро пожаловать в нашу уютную чайную лавку, где каждая чашечка
                - это история вкуса и аромата. Мы предлагаем широкий выбор
                классических сортов и уникальных ароматизированных смесей, чтобы
                угодить вашему вкусу и удовлетворить любые чайные желания.
              </p>
              <button className="button3 mt-[15px]">Все новинки</button>
            </div>
            <Image
              src="/assets/Images/cupof2tea.png"
              alt="coffee-table"
              width={804}
              height={585}
              className="col-span-7 justify-self-end"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container items-center !py-[50px]">
            {/* <div className="navigation grid-column"> */}
            <Image
              src="/assets/Images/coffee-table.png"
              alt="coffee-table"
              width={295}
              height={295}
              className="col-span-3"
            />
            <div className="flex flex-col gap-[10px] col-span-5">
              <h5 className="text-[27px]">
                Всегда рады Вас видеть в Jasmine Dragon
              </h5>
              <h3 className="font-medium">
                Где чай расскажет вам историю вкуса
              </h3>
              <p className="p1">
                Добро пожаловать в нашу уютную чайную лавку, где каждая чашечка
                - это история вкуса и аромата. Мы предлагаем широкий выбор
                классических сортов и уникальных ароматизированных смесей, чтобы
                угодить вашему вкусу и удовлетворить любые чайные желания.
              </p>
              <div className="flex mt-[15px] gap-[15px] justify-center">
                <button onClick={handleClickTea} className="button3">
                  Чаи
                </button>
                <button className="button3">Посуда</button>
              </div>
            </div>
            <Image
              id="widthforpic"
              src="/assets/Images/Rectangle.png"
              alt="bigphoto"
              width={418}
              height={590}
              className="col-span-4 place-self-end"
            />
            {/* </div> */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container items-center !py-[50px]">
            {/* <div className="navigation grid-column"> */}
            <div className="bg-center col-span-full bg-[url('/assets/Images/cupof2tea.png')] bg-cover">
              <div className="h-[585px] w-full items-left justify-center pl-[50px] col-span-full gap-[10px] flex flex-col  bg-green-light bg-opacity-45 ">
                <h5 className="text-[27px]">Ура, у нас новое поступление!</h5>
                <h3 className="font-medium">Tia-guan-in</h3>
                <p className="p1 w-[586px]">
                  Добро пожаловать в нашу уютную чайную лавку, где каждая
                  чашечка - это история вкуса и аромата. Мы предлагаем широкий
                  выбор классических сортов и уникальных ароматизированных
                  смесей, чтобы угодить вашему вкусу и удовлетворить любые
                  чайные желания.
                </p>
                <button className="button3 mt-[15px]">Все новинки</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container items-center !py-[50px]">
            {/* <div className="navigation grid-column"> */}
            <Image
              src="/assets/Images/coffee-table.png"
              alt="coffee-table"
              width={295}
              height={295}
              className="col-span-3"
            />
            <div className="flex flex-col gap-[10px] col-span-5">
              <h5 className="text-[27px]">
                Всегда рады Вас видеть в Jasmine Dragon
              </h5>
              <h3 className="font-medium">
                Где чай расскажет вам историю вкуса
              </h3>
              <p className="p1">
                Добро пожаловать в нашу уютную чайную лавку, где каждая чашечка
                - это история вкуса и аромата. Мы предлагаем широкий выбор
                классических сортов и уникальных ароматизированных смесей, чтобы
                угодить вашему вкусу и удовлетворить любые чайные желания.
              </p>
              <div className="flex mt-[15px] gap-[15px] justify-center">
                <button onClick={handleClickTea} className="button3">
                  Чаи
                </button>
                <button className="button3">Посуда</button>
              </div>
            </div>
            <Image
              id="widthforpic"
              src="/assets/Images/Rectangle.png"
              alt="bigphoto"
              width={418}
              height={590}
              className="col-span-4 place-self-end"
            />
            {/* </div> */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container items-center !py-[50px]">
            {/* <div className="navigation grid-column"> */}
            <div className="col-span-5 gap-[10px] flex flex-col">
              <h5 className="text-[27px]">Ура, у нас новое поступление!</h5>
              <h3 className="font-medium">Tia-guan-in</h3>
              <p className="p1">
                Добро пожаловать в нашу уютную чайную лавку, где каждая чашечка
                - это история вкуса и аромата. Мы предлагаем широкий выбор
                классических сортов и уникальных ароматизированных смесей, чтобы
                угодить вашему вкусу и удовлетворить любые чайные желания.
              </p>
              <button className="button3 mt-[15px]">Все новинки</button>
            </div>
            <Image
              src="/assets/Images/cupof2tea.png"
              alt="coffee-table"
              width={804}
              height={585}
              className="col-span-7 justify-self-end"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container items-center !py-[50px]">
            {/* <div className="navigation grid-column"> */}
            <div className="bg-center col-span-full bg-[url('/assets/Images/cupof2tea.png')] bg-cover">
              <div className="h-[585px] w-full items-left justify-center pl-[50px] col-span-full gap-[10px] flex flex-col  bg-green-light bg-opacity-45 ">
                <h5 className="text-[27px]">Ура, у нас новое поступление!</h5>
                <h3 className="font-medium">Tia-guan-in</h3>
                <p className="p1 w-[586px]">
                  Добро пожаловать в нашу уютную чайную лавку, где каждая
                  чашечка - это история вкуса и аромата. Мы предлагаем широкий
                  выбор классических сортов и уникальных ароматизированных
                  смесей, чтобы угодить вашему вкусу и удовлетворить любые
                  чайные желания.
                </p>
                <button className="button3 mt-[15px]">Все новинки</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <Lines /> */}
    </>
  );
};

export default ContentSubHeader1;
