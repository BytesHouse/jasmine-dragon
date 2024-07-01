import Image from "next/image";
import React from "react";
// import strelka from  "..//..//..//..//assets/Images/Strelka.svg";
const strelka = "/assets/Images/Strelka.svg";

const DirectionForProfile = () => {
  return (
    <div className="flex flex-row items-center py-4 border-b border-[var(--blue-light)] gap-[25px]">
      <button className="fortext">
        <a href="index.html">Главная</a>
      </button>
      <button>
        <Image src={strelka} alt="strelka" width={24} height={24} />
      </button>
      <button className="fortext">
        <a href="index.html">Профиль</a>
      </button>
    </div>
  );
};

export default DirectionForProfile;
