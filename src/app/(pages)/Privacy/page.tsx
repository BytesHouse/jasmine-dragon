import { Header } from "@/components";
import Footer from "@/components/Footer/Footer";
import PrivacyBlock from "./components/PrivacyBlock/PrivacyBlock";
import { privacyText } from "@/config/constants";
const Privacy = () => {
  return (
    <div className="container">
      <Header />
      <PrivacyBlock isPrivate data={privacyText} />
      <Footer />
    </div>
  );
};

export default Privacy;
