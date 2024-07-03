import SectionOne from "../../components/SectionOne/SectionOne";
import SectionAbout from "../../components/SectionAbout/SectionAbout";
import SectionTwo from "../../components/SectionTwo/SectionTwo";
import SectionThree from "../../components/SectionThree/SectionThree";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ContentSubHeader1 from "../../components/ContentSubHeader1/ContentSubHeader1";

const Main = () => {
  return (
    <div className="container">
      <Header />
      <ContentSubHeader1 />
      <SectionOne />
      <SectionAbout />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
};

export default Main;
