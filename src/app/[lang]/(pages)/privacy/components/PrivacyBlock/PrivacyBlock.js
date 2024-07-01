// import {useTranslation} from "react-i18next";
import InfoBlock from "../InfoBlock/InfoBlock";

const PrivacyBlock = ({ data, isPrivate = false }) => {
  //   const { t } = useTranslation();
  return (
    <div className="col-span-12">
      <div className="border border-blue-light text-blue-light p-[100px]">
        {/* <h1 className="text-[40px] font-[700]">{isPrivate ? t('privacy_text_0') : t('terms_text_0')}</h1>
                <h2 className="mt-[25px]">{isPrivate ? t('privacy_text_1') : t('terms_text_1')}</h2> */}
        <h1 className="text-[40px] font-[700]">
          {isPrivate ? "privacy_text_0" : "terms_text_0"}
        </h1>
        <h2 className="mt-[25px]">
          {isPrivate ? "privacy_text_1" : "terms_text_1"}
        </h2>
        {data.map(({ id, title, text }) => (
          <InfoBlock key={id} title={title} text={text} />
        ))}
      </div>
    </div>
  );
};

export default PrivacyBlock;
