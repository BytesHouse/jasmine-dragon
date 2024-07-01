// import green from '../../assets/Images/greentea.png'
// import black from '../../assets/Images/teagreen.png'

import Image from "next/image";

const Store = () => {
  return (
    <div className="store">
      <h1 className="h1sec2-1">Магазин</h1>
      <div className="sortstore">
        <div className="choosen1">
          <Image
            className="svgbigsale"
            src="/assets/Images/teagreen.png"
            alt="teagreen"
            width={634}
            height={607}
          />

          <h1 className="h1choise">Чай на развес</h1>
          <p className="p1choise">
            Наша дружелюбная команда с удовольствием поможет вам выбрать именно
            тот чай, который подходит вам.
          </p>
          <button className="saleassorti">Смотреть ассортимент</button>
        </div>
        <div className="choosen1">
          <Image
            className="svgbigsale"
            src="/assets/Images/greentea.png"
            alt="greentea"
            width={634}
            height={607}
          />
          <h1 className="h1choise">Посуда</h1>
          <p className="p1choise">
            Наша дружелюбная команда с удовольствием поможет вам выбрать именно
            тот чай, который подходит вам.
          </p>
          <button className="saleassorti">Смотреть ассортимент</button>
        </div>
      </div>
    </div>
  );
};

export default Store;
