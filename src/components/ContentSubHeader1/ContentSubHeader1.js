"use client";

// import coffee from "/assets/Images/cofee-table.png";
// import rect from "/assets/Images/Rectangle.png";
import Lines from "@/components/Lines/Lines";
import Image from "next/image";

const ContentSubHeader1 = () => {
  const handleClickChay = () => {
    alert("Чай");
  };
  return (
    <div className="grid-column">
      <div className="navigation">
        <Image
          id="coffee-table"
          src="/assets/Images/cofee-table.png"
          alt="cofee-table"
          width={295}
          height={295}
        />
        <div className="textforheader flexcolumtext">
          <h3 id="h3" className="colorfortext">
            Всегда рады Вас видеть в Jasmine Dragon
          </h3>
          <h1 id="h1" className="colorfortext">
            Где чай расскажет вам историю вкуса
          </h1>
          <p id="ptext" className="colorfortext">
            Добро пожаловать в нашу уютную чайную лавку, где каждая чашечка -
            это история вкуса и аромата. Мы предлагаем широкий выбор
            классических сортов и уникальных ароматизированных смесей, чтобы
            угодить вашему вкусу и удовлетворить любые чайные желания.
          </p>
          <div className="positforbutt2">
            <button onClick={handleClickChay} className="button3" id="button2">
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
        />
      </div>
      <Lines />
    </div>
  );
};

export default ContentSubHeader1;
