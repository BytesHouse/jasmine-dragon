"use client";

import Lines from "@/components/Lines/Lines";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const ContentSubHeader1 = () => {
  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      return <div className={``} id={`line${index}`}></div>;
    },
  };

  const handleClickTea = () => {
    alert("Чай");
  };
  return (
    <>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={pagination}
        // spaceBetween={25}
        centeredSlides={true}
      >
        <SwiperSlide>
          <div className="container items-center !py-[50px]">
            {/* <div className="navigation grid-column"> */}
            <Image
              id="coffee-table"
              src="/assets/Images/coffee-table.png"
              alt="coffee-table"
              width={295}
              height={295}
              className="col-span-3"
            />
            <div className="flex flex-col gap-[10px] col-span-5 w-full">
              <h5 className="text-[27px]">
                Всегда рады Вас видеть в Jasmine Dragon
              </h5>
              <h3>Где чай расскажет вам историю вкуса</h3>
              <p className="p1">
                Добро пожаловать в нашу уютную чайную лавку, где каждая чашечка
                - это история вкуса и аромата. Мы предлагаем широкий выбор
                классических сортов и уникальных ароматизированных смесей, чтобы
                угодить вашему вкусу и удовлетворить любые чайные желания.
              </p>
              <div className="positforbutt2">
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
            <Image
              id="coffee-table"
              src="/assets/Images/coffee-table.png"
              alt="coffee-table"
              width={295}
              height={295}
              className="col-span-3"
            />
            <div className="flex flex-col gap-[10px] col-span-5 w-full">
              <h5 className="text-[27px]">
                Всегда рады Вас видеть в Jasmine Dragon
              </h5>
              <h3>Где чай расскажет вам историю вкуса</h3>
              <p className="p1">
                Добро пожаловать в нашу уютную чайную лавку, где каждая чашечка
                - это история вкуса и аромата. Мы предлагаем широкий выбор
                классических сортов и уникальных ароматизированных смесей, чтобы
                угодить вашему вкусу и удовлетворить любые чайные желания.
              </p>
              <div className="positforbutt2">
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
      </Swiper>
      {/* <Lines /> */}
    </>
  );
};

export default ContentSubHeader1;
