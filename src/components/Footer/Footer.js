import Footerblock1 from "@/components/Footerblock1/Footerblock1";
import Footerbuttons1 from "@/components/Footerbuttons1/Footerbuttons1";
import Footerbuttons2 from "@/components/Footerbuttons2/Footerbuttons2";
import Footerfinal from "@/components/Footerfinal/Footerfinal";

const Footer = () => {
  return (
    <footer className="border-t-[1px] border-t-[var(--blue-light)]">
      <div className="container !gap-y-[100px] !pb-[50px]">
        <Footerblock1 />
        <Footerbuttons1 />
        <Footerbuttons2 />
        <Footerfinal />
      </div>
    </footer>
  );
};

export default Footer;
