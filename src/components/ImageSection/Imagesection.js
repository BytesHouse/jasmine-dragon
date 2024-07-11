// import rect from '..//../../assets/Images/Rectangle 21.png';
// import table from '..//../../assets/Images/table.png'
// import rect2 from '..//../../assets/Images/Rectangle 23.png';
// import rect3 from '..//../../assets/Images/Rectangle 22.png';
import Image from "next/image";
const ImageSection = ({ ...props }) => {
  return (
    <div
      className={`h-[800px] max-w-[1048px] flex justify-center items-center relative ${props.className}`}
    >
      <Image
        className=""
        // w-[500px] h-[632px]
        src="/assets/Images/Rectangle 21.png"
        alt="bigphoto"
        width={473}
        height={632}
      />
      <Image
        className="absolute top-[178px] left-[133px]"
        // w-[293px] h-[274px]
        src="/assets/Images/table.png"
        alt="table"
        width={293}
        height={274}
      />
      <Image
        className="absolute top-[452px] right-[88px]"
        //  w-[307px] h-[287px]
        src="/assets/Images/Rectangle 23.png"
        alt="rect2"
        width={307}
        height={287}
      />
      <Image
        className="absolute bottom-0 left-[96px]"
        //  w-[235px] h-[220px]
        src="/assets/Images/Rectangle 22.png"
        alt="rect2"
        width={235}
        height={220}
      />
    </div>
  );
};

export default ImageSection;
