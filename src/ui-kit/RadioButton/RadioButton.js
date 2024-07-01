// PROPS
// isCurr    -> значение типа boolean для проверки что текущий компонент выбран из списка radio кнопок
// setIsCurr -> функция изменяющая состояние компонента Filter на значение текущего элемента
// children  -> текстовая нода <>children</>
const RadioButton = ({isCurr, setIsCurr, children}) => {
    return (
        <div onClick={setIsCurr} className="flex items-center gap-[5px] font-[400] text-[14px] cursor-pointer">
            <div  className="w-[12px] h-[12px] rounded-full border border-[var(--blue-light)] flex justify-center items-center">
                {isCurr && <div className="w-[6px] h-[6px] bg-[var(--blue-light)] rounded-full"></div>}
            </div>
            <span className="text-[16px]">{children}</span>
        </div>
    );
};

export default RadioButton;