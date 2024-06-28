import image1 from "../../../../assets/Images/teagreen.png";
import image2 from "../../../../assets/Images/cheainic.png";
import image3 from "../../../../assets/Images/cheaitar.png";
import image4 from "../../../../assets/Images/cupof2tea.png";
import image5 from "../../../../assets/Images/teabig.png";

const ImagesComponent = () => {
    return (
        <div className="w-full flex gap-[25px] flex-col">
            <div className="grid grid-cols-2 grid-rows-[565px] gap-[25px]">
                <img className="h-full" src={image1} alt="img-1"/>
                <img className="h-full" src={image2} alt="img-2"/>
            </div>
            <div className="relative grid grid-cols-3 grid-rows-[256px] gap-[25px] ">
                <img className="h-full w-full" src={image3} alt="img-3"/>
                <img className="h-full w-full" src={image4} alt="img-4"/>
                <img className="h-full w-full" src={image5} alt="img-5"/>
            </div>
        </div>
    );
};

export default ImagesComponent;