import Footerblock1 from "../../../../components/Footerblock1/Footerblock1";
import Footerbuttons1 from "../../../../components/Footerbuttons1/Footerbuttons1";
import Footerbuttons2 from "../../../../components/Footerbuttons2/Footerbuttons2";
import Footerfinal from "../../../../components/Footerfinal/Footerfinal";

const Footer = () => {
    return (
        <footer className="col-span-full border-t-[1px] border-t-[var(--blue-light)]">
            <div className="footercontainer">
                <Footerblock1/>
               <Footerbuttons1/>
               <Footerbuttons2/>
            </div>
            <Footerfinal/>
        </footer>
    );
};

export default Footer;