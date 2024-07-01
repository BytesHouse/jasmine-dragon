// import Strelka from "../../assets/Images/Strelka.svg";

import Image from "next/image";

const Footerbuttons1 = () => {
  return (
    <div className="knopkifooter">
      <button className="footerbutton">
        01 <span className="viborka">О нас</span>
      </button>
      <button className="footerbutton">
        02 <span className="viborka">Меню</span>
      </button>
      <button className="footerbutton">
        03 <span className="viborka">Магазин</span>
        <Image
          src="/assets/Images/Strelka.svg"
          alt="Strelka"
          width={25}
          height={25}
        />
      </button>
      <div className="pospodknopki">
        <button className="podknopki">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.25 2.74023V5.74023"
              stroke="#B5EAEE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.25 2.74023V5.74023"
              stroke="#B5EAEE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.25 2.74023V5.74023"
              stroke="#B5EAEE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 20.7402H19.5"
              stroke="#B5EAEE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.80938 20.7402C6.37394 20.0816 5.15773 19.0247 4.3052 17.6953C3.45268 16.3658 2.99968 14.8196 3 13.2402V8.74023H19.5V13.2402C19.5003 14.8196 19.0473 16.3658 18.1948 17.6953C17.3423 19.0247 16.1261 20.0816 14.6906 20.7402"
              stroke="#B5EAEE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.5004 8.74023C20.296 8.74023 21.0591 9.0563 21.6217 9.61891C22.1843 10.1815 22.5004 10.9446 22.5004 11.7402V12.4902C22.5004 13.2859 22.1843 14.0489 21.6217 14.6116C21.0591 15.1742 20.296 15.4902 19.5004 15.4902H19.1816"
              stroke="#B5EAEE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="pfooter">Посуда</span>
        </button>
      </div>
      <div className="pospodknopki">
        <button className="podknopki">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 19.24C13.5 19.24 15.9844 19.2212 18.8344 17.5712C21.6844 15.9212 22.6125 13.8681 22.9031 12.8087C22.9299 12.7133 22.9372 12.6135 22.9247 12.5151C22.9122 12.4168 22.8801 12.322 22.8302 12.2363C22.7804 12.1507 22.7139 12.0759 22.6346 12.0164C22.5553 11.9569 22.4649 11.9139 22.3688 11.89C21.6844 11.7119 20.4844 11.5525 18.9469 11.9181"
              stroke="#B5EAEE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.05408 11.9094C3.51658 11.5531 2.31658 11.7125 1.63221 11.8906C1.53602 11.9146 1.44562 11.9575 1.36635 12.017C1.28708 12.0765 1.22056 12.1513 1.17073 12.237C1.1209 12.3227 1.08877 12.4175 1.07625 12.5158C1.06373 12.6141 1.07107 12.714 1.09783 12.8094C1.38846 13.8688 2.31658 15.9313 5.16658 17.5719C8.01658 19.2125 10.501 19.2406 12.001 19.2406"
              stroke="#B5EAEE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 19.2403C12 19.2403 15.75 17.1965 15.75 11.7403C15.75 7.46527 13.4438 5.29027 12.45 4.54027C12.3196 4.44433 12.1619 4.39258 12 4.39258C11.8381 4.39258 11.6804 4.44433 11.55 4.54027C10.5562 5.29027 8.25 7.46527 8.25 11.7403C8.25 17.1965 12 19.2403 12 19.2403Z"
              stroke="#B5EAEE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 19.2405C13.125 18.9967 16.1531 17.2905 17.9719 14.1405C19.7906 10.9905 19.3406 8.48734 18.9844 7.39046C18.9299 7.21405 18.8107 7.06479 18.6507 6.97262C18.4907 6.88046 18.3018 6.85223 18.1219 6.89359C17.0455 7.13466 16.0385 7.6189 15.1781 8.30921"
              stroke="#B5EAEE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.82139 8.30921C7.96101 7.6189 6.95405 7.13466 5.87764 6.89359C5.6977 6.85223 5.50878 6.88046 5.3488 6.97262C5.18882 7.06479 5.06962 7.21405 5.01514 7.39046C4.65889 8.48734 4.20889 10.9998 6.02764 14.1405C7.84639 17.2811 10.8745 18.9967 11.9995 19.2405"
              stroke="#B5EAEE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="pfooter">Чай на развес</span>
        </button>
      </div>
      <button className="footerbutton">
        04 <span className="viborka">Корзина</span>
      </button>
    </div>
  );
};

export default Footerbuttons1;
