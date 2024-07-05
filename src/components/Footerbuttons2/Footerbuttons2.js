import SwitchLanguge from "@/ui-kit/SwitchLanguge/SwitchLanguge";
// import { mock5 } from "../../config/constants";
import { locales } from "@/i18n";

const Footerbuttons2 = () => {
  return (
    <div className="flex flex-col gap-[25px] col-span-3">
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
        <SwitchLanguge className="self-center" array={locales} />
      </div>
    </div>
  );
};

export default Footerbuttons2;
