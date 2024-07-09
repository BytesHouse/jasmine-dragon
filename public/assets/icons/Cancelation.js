function Cancelation(props) {
  return (
    <svg width={86} height={86} fill="none" {...props}>
      <rect x={0.5} y={0.5} width={85} height={85} rx={42.5} stroke="#B5EAEE" />
      <path
        d="M53.125 32.875l-20.25 20.25M53.125 53.125l-20.25-20.25"
        stroke="#B5EAEE"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Cancelation;
