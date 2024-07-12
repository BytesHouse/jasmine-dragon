function Strelka({ isMini = false, ...props }) {
  {
    return isMini ? (
      <svg width={25} height={24} fill="none" {...props}>
        <path
          d="M9.5 4.5L17 12l-7.5 7.5"
          stroke="#B5EAEE"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ) : (
      <svg width={36} height={37} fill="none" {...props}>
        <path
          d="M29.25 13.99L18 25.24 6.75 13.99"
          stroke="#B5EAEE"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}

export default Strelka;
