import Link from "next/link";
import ArrowLeft from "../../../public/assets/icons/ArrowLeft";
import ArrowRight from "../../../public/assets/icons/ArrowRight";

const Pagination = () => {
  return (
    <div className="listofproduct col-span-full">
      <Link className="strelka" href="index.html">
        <ArrowLeft />
      </Link>
      <div className="assorti">
        <Link href="index.html" className="assortinum">
          01
        </Link>
        <Link href="index.html" className="assortinum">
          02
        </Link>
        <Link href="index.html" className="assortinum">
          03
        </Link>
        <Link href="index.html" className="assortinum">
          04
        </Link>
        <Link href="index.html" className="assortinum">
          05
        </Link>
      </div>
      <Link className="strelka" href="index.html">
        <ArrowRight />
      </Link>
    </div>
  );
};

export default Pagination;
