// PROPS
// isCurr    -> значение типа boolean для проверки что текущий компонент выбран из списка radio кнопок
// setIsCurr -> функция изменяющая состояние компонента Filter на значение текущего элемента
// children  -> текстовая нода <>children</>
const Checkbox = ({ isCurr, setIsCurr, children }) => {
  return (
    <div
      onClick={setIsCurr}
      className="flex items-center gap-[10px] font-[400] text-[14px] cursor-pointer"
    >
      <div className="w-[16px] h-[16px] rounded-[1px] border border-[var(--blue-light)] flex justify-center items-center">
        {isCurr && (
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.75 0.5L3.08125 4L1.25 2.25"
              className="stroke-[var(--blue-light)]"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <p className="p2">{children}</p>
    </div>
  );
};

export default Checkbox;
