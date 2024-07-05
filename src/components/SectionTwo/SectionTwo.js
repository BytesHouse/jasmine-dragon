// import tea from "../../../public/assets/Images/tea.png";
// import living from "../../../public/assets/Images/living-room.png";
// import community from "../../../public/assets/Images/community.png";
import Image from "next/image";

const SectionTwo = () => {
  return (
    <>
      {/* <div className="container"> */}
      {/* <div className="grid grid-cols-1 mt-16 w-full grid-column"> */}
      {/* <div className="grid grid-cols-1 w-full grid-column"> */}
      {/* <div className="flex items-center mt-100 flex-col flex-wrap h-[2015px]"> */}
      <div className="col-span-half flex flex-col gap-[250px]">
        <div className="about-card">
          <Image
            src="/assets/Images/tea.png"
            alt="tea"
            width={545}
            height={545}
          />
          <h4>Наша Миссия</h4>
          <p className="p1">
            Наша миссия - распространять культуру чаепития, даря каждому
            возможность наслаждаться великолепными чайными вкусами и ароматами.
            Мы стремимся поддерживать экологически чистые производственные
            процессы и создавать устойчивые отношения с нашими поставщиками.
            Наша миссия - привносить радость и удовольствие через чай.
          </p>
        </div>
        <div className="about-card">
          <Image
            src="/assets/Images/living-room.png"
            alt="app"
            width={545}
            height={545}
          />
          <h4>Чайная</h4>
          <p>
            В нашей чайной вы найдете вдохновляющее сочетание традиций и
            современности. Мы предлагаем широкий ассортимент чая, включая
            классические сорта, редкие экземпляры и эксклюзивные
            ароматизированные смеси. В каждой чашке нашего чая - неповторимый
            вкус и аромат, который перенесет вас в мир чайных традиций и
            великолепия.
          </p>
        </div>
      </div>
      <div className="about-card col-span-half justify-self-end mt-[566px]">
        <Image
          src="/assets/Images/community.png"
          alt="people"
          width={545}
          height={545}
        />
        <h4>Наша команда</h4>
        <p>
          В нашей команде собраны настоящие ценители и знатоки чая, готовые
          поделиться своими знаниями и опытом с вами. Мы стремимся к тому, чтобы
          каждый клиент получил не только высококачественные продукты, но и
          отличное обслуживание. Наша команда готова помочь вам в выборе чая и
          создании незабываемого чайного опыта.
        </p>
      </div>
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default SectionTwo;
