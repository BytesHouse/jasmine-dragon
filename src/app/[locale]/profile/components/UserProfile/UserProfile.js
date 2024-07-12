// import pen from "..//../../../assets/Images/Pen.svg"
// import greentea from "..//..//..//..//assets/Images/greentea.png"
const pen = "/assets/Images/Pen.svg";
const greentea = "/assets/Images/greentea.png";
import Edit from "@/ui-kit/icons/Edit/Edit";
import ProfileDeco from "@/ui-kit/icons/ProfileDeco/ProfileDeco";
import Image from "next/image";

const UserProfile = () => {
  return (
    <>
      <div className="flex flex-col col-span-half gap-[25px] font-[var(--Nunito-sans)] text-[var(--blue-light)] mt-[50px]">
        <h4 className="simple font-bold">Профиль</h4>
        <div className="flex flex-col gap-[15px]">
          <label className="text-h5 font-semibold text-blue-light">
            Адрес доставки
          </label>
          <div className="max-w-[695px] flex gap-[15px] items-center p-[15px] border border-blue-light">
            <ProfileDeco />
            <input
              className=" w-full bg-[var(--green-bg)] focus:outline-none"
              type="text"
            ></input>
            <Edit />
          </div>
        </div>
        <div className="flex flex-col gap-[15px]">
          <label className="text-h5 font-semibold text-blue-light">
            Имя Фамилия
          </label>
          <div className="max-w-[695px] flex gap-[15px] items-center p-[15px] border border-blue-light">
            <ProfileDeco />
            <input
              className=" w-full bg-[var(--green-bg)] focus:outline-none"
              type="text"
            ></input>
            <Edit />
          </div>
        </div>
        <div className="flex flex-col gap-[15px]">
          <label className="text-h5 font-semibold text-blue-light">
            Номер телефона
          </label>
          <div className="max-w-[695px] flex gap-[15px] items-center p-[15px] border border-blue-light">
            <ProfileDeco />
            <input
              className=" w-full bg-[var(--green-bg)] focus:outline-none"
              type="number"
            ></input>
            <Edit />
          </div>
        </div>
      </div>
      <Image
        className="col-span-half justify-self-end"
        src={greentea}
        alt="tea"
        height={563}
        width={695}
      />
    </>
  );
};

export default UserProfile;
