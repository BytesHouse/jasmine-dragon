"use client";

import Image from "next/image";
import { useState } from "react";
// import MinusIcon from "../../../public/assets/Images/Minus.svg";
// import PlusIcon from "../../../public/assets/Images/Plus.svg";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="counter flex flex-row items-center gap-[5px]  ">
      <button className="minus-button flex cursor-pointer" onClick={decrement}>
        <Image
          src="/assets/Images/Minus.svg"
          alt="Minus"
          width={36}
          height={36}
        />
      </button>
      <div className="font-semibold text-center text-[20px] font-[500]">
        {count}
      </div>
      <button className="plus-button flex" onClick={increment}>
        <Image
          src="/assets/Images/Plus.svg"
          alt="Plus"
          width={36}
          height={36}
        />
      </button>
    </div>
  );
}

export default Counter;
