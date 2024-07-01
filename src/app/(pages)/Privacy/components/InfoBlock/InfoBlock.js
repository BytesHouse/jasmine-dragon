// import {useTranslation} from "react-i18next";

const InfoBlock = ({ title, text }) => {
  // const {t} = useTranslation();
  return (
    <div className="mt-[25px] md:mt-[50px] border border-blue-light p-[50px]">
      {/* <h4 className="text-[27px] font-[700]">{t(title)}</h4>
            <p className="mt-[25px] text-[18px] font-[600]">{t(text)}</p> */}
      <h4 className="text-[27px] font-[700]">t=title</h4>
      <p className="mt-[25px] text-[18px] font-[600]">t=text</p>
    </div>
  );
};

export default InfoBlock;
