"use client";

import { useState } from "react";
import Minus from "../../../public/assets/Icons/Minus";
import Plus from "../../../public/assets/Icons/Plus";
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
        <Minus />
      </button>
      <p className="font-semibold p1 px-[10px] text-center">{count}</p>
      <button className="plus-button flex" onClick={increment}>
        <Plus />
      </button>
    </div>
  );
}

export default Counter;
