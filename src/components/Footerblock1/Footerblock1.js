// import logo from "../../../public/assets/Images/Logo.svg";

import Image from "next/image";
import Facebook from "../../../public/assets/Icons/Facebook";
import X from "../../../public/assets/Icons/X";
import Instagram from "../../../public/assets/Icons/Instagram";
import Telegram from "../../../public/assets/Icons/Telegram";
import Vk from "../../../public/assets/Icons/Vk";

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
      <div className="svgfooter">
        <a href="facebook.com">
          <Facebook />
        </a>
        <a href="x.com">
          <X />
        </a>
        <a href="instagram.com">
          <Instagram />
        </a>
        <a href="t.me">
          <Telegram />
        </a>
        <a href="vk.com">
          <Vk />
        </a>
      </div>
    </div>
  );
};

export default Footerblock1;
