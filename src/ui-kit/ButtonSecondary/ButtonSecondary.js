const ButtonSecondary = ({func, children}) => {
    return (
        <button onClick={func} className="py-[10px] px-[50px] border border-[var(--blue-light)] font-semibold text-[1rem]">
            {children}
        </button>
    );
};

export default ButtonSecondary;