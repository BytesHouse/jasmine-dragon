const AuthButton = ({ children, onClick, ...props }) => {
  return (
    <button
      className={`max-w-[277px] bg-blue-light text-green-bg p1 font-semibold p-[15px] flex-1 ${props.className}`}
      type="submit"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default AuthButton;
