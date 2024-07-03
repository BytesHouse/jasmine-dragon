import SectionOne from "../../components/SectionOne/SectionOne";
import SectionAbout from "../../components/SectionAbout/SectionAbout";
import SectionTwo from "../../components/SectionTwo/SectionTwo";
import SectionThree from "../../components/SectionThree/SectionThree";
import ContentSubHeader1 from "../../components/ContentSubHeader1/ContentSubHeader1";

const Main = () => {
  return (
    <main>
      <ContentSubHeader1 />
      <SectionOne />
      <SectionAbout />
      <SectionTwo />
      <SectionThree />
    </main>
  );
};

export default Main;
