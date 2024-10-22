"use client";

// import table from "../../../public/assets/Images/cupof2tea.png";
import Image from "next/image";
import Lines from "../../../../../components/Lines/Lines";

const ContentSubHeader2 = () => {
  const handleClickChay = () => {
    alert("Имя кнопки");
  };
  return (
    <div className="col-span-full">
      <div className="navigation">
        <div className="textforheader flexcolumtext">
          <h3 id="h3" className="colorfortext">
            Ура, у нас новое поступление
          </h3>
          <h1 id="h1" className="colorfortext">
            Tia-guan-in
          </h1>
          <p id="ptext" className="colorfortext">
            Добро пожаловать в нашу уютную чайную лавку, где каждая чашечка -
            это история вкуса и аромата. Мы предлагаем широкий выбор
            классических сортов и уникальных ароматизированных смесей, чтобы
            угодить вашему вкусу и удовлетворить любые чайные желания.
          </p>
          <div className="positforbutt2">
            <button onClick={handleClickChay} className="button3" id="button2">
              Имя кнопки
            </button>
          </div>
        </div>
        <Image
          id="cup2"
          src="/assets/Images/cupof2tea.png"
          alt="bigphoto"
          width={804}
          height={585}
        />
      </div>
      <Lines />
    </div>
  );
};

export default ContentSubHeader2;
