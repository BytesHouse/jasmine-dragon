"use client";
// import avatar from "../../../public/assets/Images/avatar.png";
import Image from "next/image";
import { useRef } from "react";
import ArrowLeft from "../../../public/assets/icons/ArrowLeft";
import ArrowRight from "../../../public/assets/icons/ArrowRight";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

const Feedback = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="container">
      <h5 className="col-span-full">Отзывы</h5>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={25}
        // centeredSlides={true}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          // swiperRef.current = swiper;
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.update();
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        // initialSlide={1}
        className="w-full col-span-full !overflow-visible"
      >
        <SwiperSlide className="feedback">
          <Image
            className="avatar"
            src="/assets/Images/avatar.png"
            alt="avatar"
            width={150}
            height={150}
          />
          <div className="flex flex-col gap-[25px]">
            <h4 className="text-white">Анатолий Кирияк</h4>
            <p className="p1 text-white">
              Отличная чайная со своей клёвой атмосферой, чайчиками и конечно же
              баристой, который разбирается во всех нюасмах
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="feedback">
          <Image
            className="avatar"
            src="/assets/Images/avatar.png"
            alt="avatar"
            width={150}
            height={150}
          />
          <div className="flex flex-col gap-[25px]">
            <h4 className="text-white">Агнесса Погасян</h4>
            <p className="p1 text-white">
              Замечательный выбор чайной для отдыха и чилла
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="feedback">
          <Image
            className="avatar"
            src="/assets/Images/avatar.png"
            alt="avatar"
            width={150}
            height={150}
          />
          <div className="flex flex-col gap-[25px]">
            <h4 className="text-white">Анатолий Кирияк</h4>
            <p className="p1 text-white">
              Отличная чайная со своей клёвой атмосферой, чайчиками и конечно же
              баристой, который разбирается во всех нюасмах
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="feedback">
          <Image
            className="avatar"
            src="/assets/Images/avatar.png"
            alt="avatar"
            width={150}
            height={150}
          />
          <div className="flex flex-col gap-[25px]">
            <h4 className="text-white">Анатолий Кирияк</h4>
            <p className="p1 text-white">
              Отличная чайная со своей клёвой атмосферой, чайчиками и конечно же
              баристой, который разбирается во всех нюасмах
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="feedback">
          <Image
            className="avatar"
            src="/assets/Images/avatar.png"
            alt="avatar"
            width={150}
            height={150}
          />
          <div className="flex flex-col gap-[25px]">
            <h4 className="text-white">Агнесса Погасян</h4>
            <p className="p1 text-white">
              Замечательный выбор чайной для отдыха и чилла
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="linksfeedbacks col-span-full">
        <button
          ref={prevRef}
          // onClick={() => swiperRef.current?.slidePrev()}
          className="linkfeedbacks textfeedback"
        >
          <ArrowLeft />
          Старые
        </button>
        <button
          ref={nextRef}
          // onClick={() => swiperRef.current?.slideNext()}
          className="linkfeedbacks textfeedback"
        >
          Новые
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Feedback;
