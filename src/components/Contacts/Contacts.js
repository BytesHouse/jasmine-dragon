import Image from "next/image";
// import tea from "../../../public/assets/Images/teabig.png";

const Contacts = () => {
  return (
    <div className="container">
      <h5 className="col-span-full">Контакты</h5>

      <Image
        id="imgcontacts"
        src="/assets/Images/teabig.png"
        alt="tea"
        width={560}
        height={654}
        className="col-span-5 "
      />
      <div className="sectioncontacts col-span-7">
        <div className="subseccontacts">
          <h3>Адрес</h3>
          <h5 className="simple font-bold">
            Bd. Moscovei 12/2, Chisinau, Moldova
          </h5>
        </div>
        <div className="subseccontacts">
          <h3>E-mail</h3>
          <a href="mailto:hello@jasminedragontea.com" className="pcontacts">
            hello@jasminedragontea.com
          </a>
          <a href="mailto:ceo@jasminedragontea.com" className="pcontacts">
            ceo@jasminedragontea.com
          </a>
        </div>
        <div className="subseccontacts">
          <h3>Номера телефона</h3>
          <a href="tel:022444444" className="pcontacts">
            022-44-44-44
          </a>
          <a href="tel:069555555" className="pcontacts">
            069-555-555
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
