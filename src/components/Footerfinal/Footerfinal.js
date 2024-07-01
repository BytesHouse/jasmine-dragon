// import { Link } from 'react-router-dom';
import Link from "next/link";

const Footerfinal = () => {
  return (
    <div className="final">
      <p className="pfooter">
        All rights are reserved by{" "}
        <Link href="https://sterrasoft.com" target="_blank" rel="noreferrer">
          S-Terra-Soft
        </Link>
      </p>
      <div className="gap50">
        <Link className="linkfooter" href="/privacy">
          Политика приватности
        </Link>
        <Link className="linkfooter" href="/terms">
          Условия использования
        </Link>
      </div>
    </div>
  );
};

export default Footerfinal;
