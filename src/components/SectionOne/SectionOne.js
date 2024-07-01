// import cheainic from "../../../public/assets/Images/cheainic.png";
// import cheaitar from "../../../public/assets/Images/cheaitar.png";
// import table from "../../../public/assets/Images/table.png";
// import cuptea from "../../../public/assets/Images/2cuptea.png";

import Image from "next/image";

const SectionOne = () => {
  return (
    <section className="section1">
      <Image
        id="img1"
        src="/assets/Images/cheainic.png"
        alt="Image 1"
        width={450}
        height={462}
      />
      <Image
        id="img2"
        src="/assets/Images/cheaitar.png"
        alt="Image 2"
        width={450}
        height={300}
      />
      <p id="text1">
        Наслаждайтесь чаем с пользой: вкус, качество, уют и особенная атмосфера
      </p>
      <Image
        id="img3"
        src="/assets/Images/table.png"
        alt="table"
        width={219}
        height={219}
      />
      <Image
        id="img4"
        src="/assets/Images/2cuptea.png"
        alt="2cup"
        width={340}
        height={246}
      />
    </section>
  );
};

export default SectionOne;
