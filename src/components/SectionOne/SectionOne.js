// import cheainic from "../../../public/assets/Images/cheainic.png";
// import cheaitar from "../../../public/assets/Images/cheaitar.png";
// import table from "../../../public/assets/Images/table.png";
// import cuptea from "../../../public/assets/Images/2cuptea.png";

import Image from "next/image";

const SectionOne = () => {
  return (
    <section className="section1 container">
      <Image
        id="img1"
        src="/assets/Images/cheainic.png"
        alt="Image 1"
        width={462}
        height={462}
        className="col-start-2 col-end-6 w-full"
      />
      <Image
        id="img2"
        src="/assets/Images/cheaitar.png"
        alt="Image 2"
        width={450}
        height={300}
        className="mt-[331px] col-start-8 col-end-12 w-full"
      />
      <div className="grid-column container !p-0 relative">
        <p id="text1" className="col-start-1 col-end-13">
          Наслаждайтесь чаем с пользой: вкус, качество, уют и особенная
          атмосфера
        </p>
        <Image
          id="img3"
          src="/assets/Images/table.png"
          alt="table"
          width={219}
          height={219}
          className="col-start-8 col-end-10 w-full absolute top-[250px]"
        />
        <Image
          id="img4"
          src="/assets/Images/2cuptea.png"
          alt="2cup"
          width={340}
          height={246}
          className="col-start-3 col-end-6 my-[100px] w-full"
        />
      </div>
    </section>
  );
};

export default SectionOne;
