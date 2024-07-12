import { mock2 } from "@/config/constants";
import ChooseHeart from "../../ui-kit/icons/ChooseHeart/ChooseHeart";
import Cart from "../../ui-kit/icons/Cart/Cart";
import Pagination from "../Pagination/Pagination";

const RecentlyViewed = () => {
  return (
    <div className="mt-[200px] container">
      <h4 className="col-span-full">Последнее просмотренное</h4>
      <div className="options col-span-full">
        <button className="buttonhotsale">Меню</button>
        <button className="buttonhotsale">Чаи</button>
        <button className="buttonhotsale">Посуда</button>
      </div>
      {mock2.slice(0, 3).map((item) => (
        <div key={Math.random()} className="choosen col-span-third">
          <img className="svgchoise" src={item.image} alt="teagreen" />
          <ChooseHeart />
          <h4>{item.title}</h4>
          <p className="p1">{item.description}</p>
          <div className="flex items-center w-full gap-[15px]">
            <h5 className="simple w-auto font-semibold">{item.price}</h5>
            <span className="discount">{item.price}</span>
          </div>
          <button className="buttonchoise w-full">
            <Cart />
            <h5 className="simple w-auto font-semibold">В корзину</h5>
          </button>
        </div>
      ))}
      <Pagination />
    </div>
  );
};

export default RecentlyViewed;
