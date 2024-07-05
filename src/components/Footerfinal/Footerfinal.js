// import { Link } from 'react-router-dom';
import Link from "next/link";
import useLocale from "@/hooks/useLocale";

const Footerfinal = () => {
  const lang = useLocale();
  console.log();
  return (
    <div className="col-span-full flex justify-between">
      <p className="p1">
        All rights are reserved by{" "}
        <Link href="https://sterrasoft.com" target="_blank" rel="noreferrer">
          S-Terra-Soft
        </Link>
      </p>
      <div className="flex gap-[50px]">
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
