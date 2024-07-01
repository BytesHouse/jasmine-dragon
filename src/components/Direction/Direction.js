// import strelka from  "..//..//assets/Images/Strelka.svg";

import Image from "next/image";

const Direction = () => {
  return (
    <div className="colorforborder">
      <button className="fortext">
        <a href="index.html">Главная</a>
      </button>
      <button>
        <Image
          src="/assets/Images/Strelka.svg"
          alt="strelka"
          width={24}
          height={24}
        />
      </button>
      <button className="fortext">
        <a href="index.html">Чаи</a>
      </button>
    </div>
  );
};

export default Direction;
