import { Header } from "@/components";
import Footer from "@/components/Footer/Footer";
import PrivacyBlock from "./components/PrivacyBlock/PrivacyBlock";
import { privacyText } from "@/config/constants";
const Privacy = () => {
  return (
    <main className="container">
      <PrivacyBlock isPrivate data={privacyText} />
    </main>
  );
};

export default Privacy;
