import ContentSubHeader2 from "./components/ContentSubHeader2/ContentSubHeader2";
import Direction from "../../../components/Direction/Direction";
import Menu from "./components/Menu/Menu";
import Footer from "../../../components/Footer/Footer";
import ContentSubHeader1 from "@/components/ContentSubHeader1/ContentSubHeader1";
import { prisma } from "../../../../db";

const TeasMenu = async () => {
  const teas = await prisma.product.findMany();
  console.log(teas);
  return (
    <>
      <ContentSubHeader1 />
      {/* <div className="container"> */}
      {/* <ContentSubHeader2 /> */}
      {/* <Direction /> */}
      <Menu />
      {/* </div> */}
    </>
  );
};

export default TeasMenu;
