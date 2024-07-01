// import rect from '..//../../assets/Images/Rectangle 21.png';
// import table from '..//../../assets/Images/table.png'
// import rect2 from '..//../../assets/Images/Rectangle 23.png';
// import rect3 from '..//../../assets/Images/Rectangle 22.png';
import Image from "next/image";
const ImageSection = () => {
  return (
    <div className="ml-[40px] w-[1045px] h-[800px]">
      <Image
        className="absolute  my-[85px] mx-[285px]"
        // w-[500px] h-[632px]
        src="/assets/Images/Rectangle 21.png"
        alt="bigphoto"
        width={500}
        height={632}
      />
      <Image
        className="absolute mt-[180px] ml-[140px]"
        // w-[293px] h-[274px]
        src="/assets/Images/table.png"
        alt="table"
        width={293}
        height={274}
      />
      <Image
        className="absolute mt-[29%] ml-[44%]"
        //  w-[307px] h-[287px]
        src="/assets/Images/Rectangle 23.png"
        alt="rect2"
        width={307}
        height={287}
      />
      <Image
        className="absolute mt-[38%] ml-[8%]"
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
