import Image from "next/image";
// import tea from "../../../public/assets/Images/teabig.png";

const Contacts = () => {
  return (
    <div className="contacts">
      <h3 className="h3contacts">Контакты</h3>
      <div className="maindivcontacts">
        <Image
          id="imgcontacts"
          src="/assets/Images/teabig.png"
          alt="tea"
          width={560}
          height={654}
        />
        <div className="sectioncontacts">
          <div className="subseccontacts">
            <h2 className="h2contacts">Адрес</h2>
            <p className="pcontacts">Bd. Moscovei 12/2, Chisinau, Moldova</p>
          </div>
          <div className="subseccontacts">
            <h2 className="h2contacts">E-mail</h2>
            <a href="index.html" className="pcontacts">
              hello@jasminedragontea.com
            </a>
            <a href="index.html" className="pcontacts">
              ceo@jasminedragontea.com
            </a>
          </div>
          <div className="subseccontacts">
            <h2 className="h2contacts">Номера телефона</h2>
            <p className="pcontacts">022-44-44-44</p>
            <p className="pcontacts">069-555-555</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
