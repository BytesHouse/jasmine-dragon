import { mock } from "@/config/constants";
// import cancelation from "..//..//assets/Images/Cancelation.svg";
import Counter from "../Counter/Counter";
import ChooseHeart2 from "../../../public/assets/icons/ChooseHeart2";
import Cancelation from "../../../public/assets/icons/Cancelation";
import Image from "next/image";

const ChoiseForCart = () => {
  return (
    <div className="col-span-7 flex flex-col gap-25 relative gap-[25px] max-w-[840px]">
      {mock.map((item) => (
        <div
          key={Math.random()}
          className="flex gap-[50px] p-[25px] border border-[var(--green-bg)] hover:bg-[var(--green-light)] hover:border-[var(--blue-light)] transition duration-300 ease-in-out items-center relative"
        >
          <Image
            // className="svgchoise2"
            src={item.image}
            alt="teagreen"
            height={250}
            width={250}
          />
          <ChooseHeart2 />
          <div className="flex flex-col justify-center gap-[25px]">
            <h4 className="font-medium">{item.title}</h4>
            <p className="p1">{item.description}</p>
            <Counter />
            <div className="flex mt-[15px] flex-row gap-[15px] items-center not-italic ">
              <h5 className="font-semibold simple w-auto">{item.price}</h5>
              <span className="discount">{item.price}</span>
            </div>
          </div>
          <button>
            <Cancelation />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ChoiseForCart;
