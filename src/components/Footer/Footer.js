import Footerblock1 from "@/components/Footerblock1/Footerblock1";
import Footerbuttons from "@/components/Footerbuttons/Footerbuttons";
import Footerbuttons2 from "@/components/Footerbuttons2/Footerbuttons2";
import Footerfinal from "@/components/Footerfinal/Footerfinal";

const Footer = () => {
  return (
    <footer className="border-t-[1px] border-t-[var(--blue-light)]">
      <div className="container !gap-y-[100px] !pb-[50px]">
        <Footerblock1 />
        <Footerbuttons />
        {/* <Footerbuttons2 /> */}
        <Footerfinal />
      </div>
    </footer>
  );
};

export default Footer;
