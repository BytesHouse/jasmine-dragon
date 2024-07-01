import { Header } from "@/components";
import PrivacyBlock from "../privacy/components/PrivacyBlock/PrivacyBlock";
import { termsText } from "@/config/constants";
import Footer from "@/components/Footer/Footer";

const Terms = () => {
  return (
    <div className="container">
      <Header />
      <PrivacyBlock data={termsText} />
      <Footer />
    </div>
  );
};

export default Terms;
