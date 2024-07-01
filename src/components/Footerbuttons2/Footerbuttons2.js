import React from "react";
import SwitchLanguge from "@/ui-kit/SwitchLanguge/SwitchLanguge";
import { mock5 } from "../../config/constants";

const Footerbuttons2 = () => {
  return (
    <div>
      <div className="knopkifooter">
        <button className="footerbutton">
          05 <span className="viborka">Профиль</span>
        </button>
        <button className="footerbutton">
          06 <span className="viborka">Избранное</span>
        </button>
        <button className="footerbutton">
          07 <span className="viborka">Карьера</span>
        </button>
        <button className="footerbutton">
          08 <span className="viborka">Контакты</span>
        </button>
        <div className="flex gap-[15px] ">
          <span className="footerbutton" id="">
            09
          </span>
          <span className="viborka"> Язык</span>
          <SwitchLanguge className="self-center" array={mock5} />
        </div>
      </div>
    </div>
  );
};

export default Footerbuttons2;
