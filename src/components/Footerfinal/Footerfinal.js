// import { Link } from 'react-router-dom';
import Link from "next/link";
import useLocale from "@/hooks/useLocale";

const Footerfinal = () => {
  const lang = useLocale();
  console.log();
  return (
    <div className="final">
      <p className="pfooter">
        All rights are reserved by{" "}
        <Link href="https://sterrasoft.com" target="_blank" rel="noreferrer">
          S-Terra-Soft
        </Link>
      </p>
      <div className="gap50">
        <Link className="linkfooter" href={`/${lang}/privacy`}>
          Политика приватности
        </Link>
        <Link className="linkfooter" href={`/${lang}/terms`}>
          Условия использования
        </Link>
      </div>
    </div>
  );
};

export default Footerfinal;
