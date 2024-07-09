import {
  Footerbuttons,
  // Footerbuttons2,
  HeaderForMenu,
} from "@/components";
import Footerfinal from "../../../components/Footerfinal/Footerfinal";
import ImageSection from "../../../components/ImageSection/Imagesection";

const Menu = () => {
  return (
    <div className="container">
      <HeaderForMenu />
      <div className="flex gap-[50px]">
        <ImageSection />
        <div className="flex flex-col pt-[30px] gap-[25px]">
          <Footerbuttons />
          {/* <Footerbuttons2 /> */}
        </div>
      </div>
      <div className="col-span-full">
        <Footerfinal />
      </div>
    </div>
  );
};

export default Menu;
