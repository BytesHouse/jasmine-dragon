import {
  Footerbuttons,
  // Footerbuttons2,
  HeaderForMenu,
} from "@/components";
import Footerfinal from "../../../components/Footerfinal/Footerfinal";
import ImageSection from "../../../components/ImageSection/Imagesection";

const Menu = () => {
  return (
    <div className="container !pt-[25px]">
      <ImageSection className="col-span-9" />
      <div className="col-span-3">
        <Footerbuttons isVertical={true} />
        {/* <Footerbuttons2 /> */}
      </div>
      {/* <div className="col-span-full">
        <Footerfinal />
      </div> */}
    </div>
  );
};

export default Menu;
