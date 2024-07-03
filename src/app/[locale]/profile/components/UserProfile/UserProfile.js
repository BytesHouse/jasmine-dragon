// import pen from "..//../../../assets/Images/Pen.svg"
// import greentea from "..//..//..//..//assets/Images/greentea.png"
const pen = "/assets/Images/Pen.svg";
const greentea = "/assets/Images/greentea.png";

const UserProfile = () => {
  return (
    <div className="flex col-span-12 mt-[50px] flex relative gap-[50px]">
      <div className="flex flex-col gap-[25px] font-[var(--Nunito-sans)] text-[var(--blue-light)] mt-[50px]">
        <h1 className="text-[40px] font-[700]">Профиль</h1>
        <div className="flex flex-col gap-[15px]">
          <label className="text-[20px] font-[500]">Адрес доставки</label>
          <input
            className="w-[700px] border border-blue-light bg-[var(--green-bg)] p-4 focus:outline-none"
            type="text"
          ></input>
          <img
            className="absolute mt-[3.7%] ml-[43%] w-[36px] h-[36px]"
            src={pen}
            alt="redact"
          ></img>
        </div>
        <div className="flex flex-col gap-[15px]">
          <label className="text-[20px] font-[500]">Имя Фамилия</label>
          <input
            className="w-[700px] border border-blue-light  bg-[var(--green-bg)] p-4 focus:outline-none"
            type="text"
          ></input>
          <img
            className="absolute mt-[3.7%] ml-[43%] w-[36px] h-[36px]"
            src={pen}
            alt="redact"
          ></img>
        </div>
        <div className="flex flex-col gap-[15px]">
          <label className="text-[20px] font-[500]">Номер телефона</label>
          <input
            className="w-[700px] border border-blue-light  bg-[var(--green-bg)] p-4 focus:outline-none"
            type="text"
          ></input>
          <img
            className="absolute mt-[3.7%] ml-[43%] w-[36px] h-[36px]"
            src={pen}
            alt="redact"
          ></img>
        </div>
      </div>
      <img className="w-full h-full flex-1" src={greentea} alt="tea"></img>
    </div>
  );
};

export default UserProfile;
