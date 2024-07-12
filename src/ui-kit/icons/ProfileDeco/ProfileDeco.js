function ProfileDeco(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M12 21a9 9 0 100-18 9 9 0 000 18z"
        stroke="#B5EAEE"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17.25a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5z"
        fill="#B5EAEE"
        stroke="#B5EAEE"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ProfileDeco;
