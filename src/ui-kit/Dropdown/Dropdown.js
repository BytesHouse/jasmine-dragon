import React, { useState, useEffect } from "react";

const Dropdown = ({ array }) => {
  const [isShow, setIsShow] = useState(false);
  const [choice, setChoice] = useState(array[0] || "Значение по умолчанию");

  const handleChangeIsShow = () => setIsShow(!isShow);

  const handleChangeChoice = (item) => {
    setChoice(item);
    setIsShow(false);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".dropdown")) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="z-10 dropdown flex items-center justify-center bg-[var(--green-light)] w-[300px] border border-[var(--blue-light)] [&>div] font-[var(--Nunito-sans)] text-[var(--blue-light)] relative [&_li]:border [&_li]:border-[var(--blue-light)] [&_li]:p-4 [&_ul]:absolute">
      {typeof array[0] === "string" ? (
        <div>
          <div onClick={handleChangeIsShow}>{choice}</div>
          {isShow && (
            <ul>
              {array.map((item, index) => (
                <li onClick={() => handleChangeChoice(item)} key={index}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div>
          <div
            className="flex items-center justify-center gap-[15px] py-[15px] "
            onClick={handleChangeIsShow}
          >
            {choice.title}
            {choice.icon}
          </div>
          {isShow && (
            <ul className=" ml-[-1px]">
              {array.map((item) => (
                <li
                  className="flex gap-[15px] items-center justify-center hover:bg-[var(--blue)] w-[300px] border border-[var(--blue-light)] bg-[var(--green-light)]"
                  onClick={() => handleChangeChoice(item)}
                  key={item.id}
                >
                  {item.title}
                  {item.icon}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
