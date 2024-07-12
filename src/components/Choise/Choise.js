import { mock } from "@/config/constants";
import Image from "next/image";
import Cart from "../../ui-kit/icons/Cart/Cart";
import ChooseHeart from "../../ui-kit/icons/ChooseHeart/ChooseHeart";
import Pagination from "../Pagination/Pagination";

const Choise = () => {
  return (
    <div className="container !pt-0">
      {mock.map((item) => (
        <div key={Math.random()} className="choosen col-span-third">
          <Image
            className="svgchoise"
            src={item.image}
            alt="teagreen"
            width={413}
            height={413}
          />
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

export default Choise;
