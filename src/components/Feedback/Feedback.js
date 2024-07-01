// import avatar from "../../../public/assets/Images/avatar.png";
import Image from "next/image";

const Feedback = () => {
  return (
    <div className="Feedbacks">
      <h3 className="h3contacts">Отзывы</h3>
      <div className="People">
        <div className="Liudi">
          <Image
            className="avatar"
            src="/assets/Images/avatar.png"
            alt="avatar"
            width={150}
            height={150}
          />
          <div className="textliudi">
            <h2 className="h2feedbacks">Анатолий Кирияк</h2>
            <p className="pfeedbacks">
              Отличная чайная со своей клёвой атмосферой, чайчиками и конечно же
              баристой, который разбирается во всех нюасмах
            </p>
          </div>
        </div>
        <div className="Liudi">
          <Image
            className="avatar"
            src="/assets/Images/avatar.png"
            alt="avatar"
            width={150}
            height={150}
          />
          <div className="textliudi">
            <h2 className="h2feedbacks">Агнесса Погасян</h2>
            <p className="pfeedbacks">
              Замечательный выбор чайной для отдыха и чилла
            </p>
          </div>
        </div>
        <div className="Liudi">
          <Image
            className="avatar"
            src="/assets/Images/avatar.png"
            alt="avatar"
            width={150}
            height={150}
          />
          <div className="textliudi">
            <h2 className="h2feedbacks">Анатолий Кирияк</h2>
            <p className="pfeedbacks">
              Отличная чайная со своей клёвой атмосферой, чайчиками и конечно же
              баристой, который разбирается во всех нюасмах
            </p>
          </div>
        </div>
      </div>
      <div className="linksfeedbacks">
        <a className="linkfeedbacks textfeedback" href="index.html">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5938 12.9902L4.40625 12.9902"
              stroke="#B5EAEE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.4375 5.95898L4.40625 12.9902L11.4375 20.0215"
              stroke="#B5EAEE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Старые
        </a>
        <a className="linkfeedbacks textfeedback" href="index.html">
          Новые
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.40625 12.9902L21.5938 12.9902"
              stroke="#B5EAEE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5625 20.0215L21.5938 12.9902L14.5625 5.95898"
              stroke="#B5EAEE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Feedback;
