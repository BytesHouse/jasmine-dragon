// import logo from "../../../public/assets/Images/Logo.svg";

import Image from "next/image";
import SocialButtons from "@/ui-kit/SocialButtons/SocialButtons";

const Footerblock1 = () => {
  return (
    <div className="flex flex-col gap-[25px] col-span-5">
      <div className="footerbegginning">
        <Image
          src="/assets/Images/Logo.svg"
          alt="logo"
          width={81}
          height={90}
        />
        <p className="jasminedragonheader">Jasmine Dragon</p>
      </div>
      <div className="flex flex-col gap-[15px]">
        <h5 className="simple font-bold">Оставайтесь на связи</h5>
        <p className="p1">
          Подпишитесь и получайте последние актуальные новости и акции от вашей
          любимой чайной Jasmine Dragon
        </p>
        <div className="knopki">
          <input
            className="inputfooter"
            placeholder="Введите ваш e-mail"
            type="text"
            id="email"
            name="email"
          />
          <button className="buttonfooter">Подписаться</button>
        </div>
      </div>
      <SocialButtons />
    </div>
  );
};

export default Footerblock1;
