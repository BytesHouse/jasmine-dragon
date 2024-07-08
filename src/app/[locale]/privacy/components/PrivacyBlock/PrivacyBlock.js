// import {useTranslation} from "react-i18next";
import { useTranslations } from "next-intl";
import InfoBlock from "../InfoBlock/InfoBlock";

const PrivacyBlock = ({ data, isPrivate = false }) => {
  //   const { t } = useTranslation();
  const page = isPrivate ? "Privacy" : "Terms";
  const t = useTranslations(page);
  return (
    <div className="col-span-12">
      <div className="border border-blue-light text-blue-light p-[100px]">
        {/* <h1 className="text-[40px] font-[700]">{isPrivate ? t('privacy_text_0') : t('terms_text_0')}</h1>
                <h2 className="mt-[25px]">{isPrivate ? t('privacy_text_1') : t('terms_text_1')}</h2> */}
        <h4 className="simple">
          {isPrivate ? t("privacy_text_0") : t("terms_text_0")}
        </h4>
        <p className="p1 mt-[25px] font-semibold">
          {isPrivate ? t("privacy_text_1") : t("terms_text_1")}
        </p>
        {data.map(({ id, title, text }) => (
          <InfoBlock key={id} title={title} text={text} page={page} />
        ))}
      </div>
    </div>
  );
};

export default PrivacyBlock;
