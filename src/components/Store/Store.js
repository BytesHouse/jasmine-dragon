// import green from '../../assets/Images/greentea.png'
// import black from '../../assets/Images/teagreen.png'

import Image from "next/image";

const Store = () => {
  return (
    // <div className="store">
    <div className="container">
      <h4 className="col-span-full">Магазин</h4>
      <div className="choosen1 col-span-half">
        <Image
          className="svgbigsale"
          src="/assets/Images/teagreen.png"
          alt="teagreen"
          width={607}
          height={607}
        />

        <h4 className="text-center">Чай на развес</h4>
        <p className="p1">
          Наша дружелюбная команда с удовольствием поможет вам выбрать именно
          тот чай, который подходит вам.
        </p>
        <button className="saleassorti w-full">
          <h5>Смотреть ассортимент</h5>
        </button>
      </div>
      <div className="choosen1 col-span-half">
        <Image
          className="svgbigsale"
          src="/assets/Images/greentea.png"
          alt="greentea"
          width={607}
          height={607}
        />
        <h4 className="text-center">Посуда</h4>
        <p className="p1">
          Наша дружелюбная команда с удовольствием поможет вам выбрать именно
          тот чай, который подходит вам.
        </p>
        <button className="saleassorti w-full">
          <h5>Смотреть ассортимент</h5>
        </button>
      </div>
    </div>
    // </div>
  );
};

export default Store;
