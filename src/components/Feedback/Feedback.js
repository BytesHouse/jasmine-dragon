// import avatar from "../../../public/assets/Images/avatar.png";
import Image from "next/image";
import ArrowLeft from "../../../public/assets/icons/ArrowLeft";
import ArrowRight from "../../../public/assets/icons/ArrowRight";

const Feedback = () => {
  return (
    <div className="container">
      <h5 className="col-span-full">Отзывы</h5>
      <div className="People col-span-full">
        <div className="Liudi">
          <Image
            className="avatar"
            src="/assets/Images/avatar.png"
            alt="avatar"
            width={150}
            height={150}
          />
          <div className="flex flex-col gap-[25px]">
            <h4 className="text-white">Анатолий Кирияк</h4>
            <p className="p1 text-white">
              Отличная чайная со своей клёвой атмосферой, чайчиками и конечно же
              баристой, который разбирается во всех нюасмах
            </p>
          </div>
        </div>
        {/* <div className="Liudi">
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
        </div> */}
        {/* <div className="Liudi">
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
        </div> */}
      </div>
      <div className="linksfeedbacks col-span-full">
        <a className="linkfeedbacks textfeedback" href="index.html">
          <ArrowLeft />
          Старые
        </a>
        <a className="linkfeedbacks textfeedback" href="index.html">
          Новые
          <ArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Feedback;
