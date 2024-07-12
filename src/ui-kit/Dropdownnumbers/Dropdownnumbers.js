import { useState, useEffect } from "react";
// import { Arrowdown, Arrowup } from "../icons";
import Strelka from "../icons/Strelka/Strelka";

const Dropdownnumbers = ({ array }) => {
  const [isShow, setIshow] = useState(false);
  const [choice, setChoice] = useState(array[0] || "Значение по умолчанию");

  const handleChangeIsShow = () => setIshow(!isShow);

  const handleChangeChoice = (item) => {
    setChoice(item);
    setIshow(false);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".dropdown")) {
      setIshow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="z-10 dropdown flex items-center justify-center bg-[var(--green-light)] p-[15px] border border-[var(--blue-light)] [&>div] font-[var(--Nunito-sans)] text-[var(--blue-light)] relative [&_li]:border [&_li]:border-[var(--blue-light)] [&_li]:p-[15px] [&_ul]:absolute">
      {typeof array[0] === "string" ? (
        <div>
          <div onClick={handleChangeIsShow}>
            {choice}
            <Strelka
              className={`transition ${isShow && "rotate-90"}`}
              isMini={true}
            />
          </div>
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
        <>
          <div>
            <div className="flex gap-[15px]" onClick={handleChangeIsShow}>
              {choice.title}
              <Strelka
                className={`transition ${isShow && "rotate-90"}`}
                isMini={true}
              />
            </div>
          </div>
          {isShow && (
            <ul className="absolute top-[100%] -left-px w-[102%]">
              {array.map((item) => (
                <li
                  className="flex gap-[15px] items-center hover:bg-[var(--blue)] border border-[var(--blue-light)] bg-[var(--green-light)]"
                  onClick={() => handleChangeChoice(item)}
                  key={item.id}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default Dropdownnumbers;
