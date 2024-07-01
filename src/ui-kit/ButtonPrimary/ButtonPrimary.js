
const ButtonPrimary = ({func, children}) => {
    return (
        <button onClick={func} className="py-[10px] px-[50px] border border-[var(--blue-light)] bg-[var(--blue)] font-semibold text-[1rem]">
            {children}
        </button>
    );
};

export default ButtonPrimary;