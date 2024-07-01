import { useState, useEffect, useRef } from "react";
import RadioButton from "../RadioButton/RadioButton";
import { filterConfig } from "../../config/filter.config";
import Checkbox from "../Checkbox/Checkbox";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import { RangeSlider } from "../RangeSlider/RangeSlider";

const Filter = () => {
  const filterRef = useRef();
  const toDo = "flex flex-col gap-[5px]";
  const { stock, type, manufacturer } = filterConfig;
  const [show, setIsShow] = useState(false);
  const [isStock, setIsStock] = useState(stock[0].value);
  const [typeChecked, setTypeChecked] = useState(type);
  const [manufc, setManufc] = useState(manufacturer);
  const [price, setPrice] = useState({ min: 0, max: 100 });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickCheckBoxType = (key) => {
    const updatedItems = typeChecked.map((item) =>
      item.key === key ? { ...item, checked: !item.checked } : item
    );
    setTypeChecked(updatedItems);
  };

  const handleClickCheckBoxManufc = (key) => {
    const updatedItems = manufc.map((item) =>
      item.key === key ? { ...item, checked: !item.checked } : item
    );
    setManufc(updatedItems);
  };

  const handleSubmitFilter = () => {
    // Add the logic for applying the filter
  };

  const handleResetFilter = () => {
    setIsStock(stock[0].value);
    setTypeChecked(type.map((item) => ({ ...item, checked: false })));
    setManufc(manufacturer.map((item) => ({ ...item, checked: false })));
    setPrice({ min: 0, max: 100 });
  };

  return (
    <div className="relative z-30" ref={filterRef}>
      <div
        className="p-4 border border-[var(--blue-light)] bg-[var(--green-light)]"
        onClick={() => setIsShow(!show)}
      >
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.94684 0.5H18.0531C18.1986 0.500046 18.3409 0.542401 18.4627 0.621905C18.5846 0.701409 18.6806 0.81463 18.7393 0.947774C18.7979 1.08092 18.8165 1.22824 18.7929 1.37179C18.7693 1.51533 18.7044 1.64891 18.6062 1.75625L12.4468 8.53437C12.3187 8.67159 12.2482 8.85286 12.25 9.04063V14.3469C12.2511 14.4715 12.2208 14.5944 12.1618 14.7042C12.1028 14.814 12.017 14.9072 11.9125 14.975L8.91247 16.9719C8.79994 17.046 8.66951 17.0884 8.53491 17.0947C8.40031 17.101 8.2665 17.0709 8.14755 17.0076C8.0286 16.9443 7.9289 16.8501 7.85894 16.7349C7.78898 16.6198 7.75134 16.4879 7.74997 16.3531V9.04063C7.75178 8.85286 7.68129 8.67159 7.5531 8.53437L1.39372 1.75625C1.29552 1.64891 1.23066 1.51533 1.20704 1.37179C1.18341 1.22824 1.20205 1.08092 1.26067 0.947774C1.3193 0.81463 1.41538 0.701409 1.53721 0.621905C1.65904 0.542401 1.80137 0.500046 1.94684 0.5Z"
            className={
              show
                ? "fill-[var(--blue-light)] stroke-gray"
                : "fill-none stroke-[var(--blue-light)]"
            }
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {show && (
        <div className="border-[var(--blue-light)] bg-[var(--green-light)] w-[250px] absolute left-[calc(100%+20px)] top-0 border flex flex-col gap-[15px] p-[25px] text-white">
          <div className="text-[var(--blue-light)] flex flex-col gap-[15px]" onSubmit={handleSubmitFilter}>
            <div className={toDo}>
              <span className="font-semibold text-[18px]">Наличие</span>
              <div>
                {filterConfig.stock.map(({ value, key }) => (
                  <RadioButton
                    setIsCurr={() => setIsStock(value)}
                    isCurr={value === isStock}
                    key={key}
                  >
                    {value}
                  </RadioButton>
                ))}
              </div>
            </div>
            <div className={toDo}>
              <span className="font-semibold text-[18px]">Тип чая</span>
              <div className="h-[120px] overflow-y-scroll">
                {typeChecked.map(({ value, key, checked }) => (
                  <Checkbox
                    setIsCurr={() => handleClickCheckBoxType(key)}
                    isCurr={checked}
                    key={key}
                  >
                    {value}
                  </Checkbox>
                ))}
              </div>
            </div>
            <div className={toDo}>
              <span className="font-semibold text-[18px]">Производитель</span>
              <div className="h-[120px] overflow-y-scroll">
                {manufc.map(({ value, key, checked }) => (
                  <Checkbox
                    setIsCurr={() => handleClickCheckBoxManufc(key)}
                    isCurr={checked}
                    key={key}
                  >
                    {value}
                  </Checkbox>
                ))}
              </div>
            </div>
            <div className={toDo}>
              <span className="font-semibold text-[18px]">Цена</span>
              <RangeSlider value={price} onChange={setPrice} min={0} max={100} step={5} />
            </div>
            <div className="flex flex-col gap-[15px]">
              <ButtonPrimary func={handleSubmitFilter}>Применить</ButtonPrimary>
              <ButtonSecondary func={handleResetFilter}>Сбросить</ButtonSecondary>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;