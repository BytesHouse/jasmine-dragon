import { useTranslations } from "next-intl";
import Link from "next/link";

const Breadcrumbs = ({ breadcrumbs, ...props }) => {
  //   const { name, type, subtype, weight } = product;
  const t = useTranslations("Breadcrumbs");
  let path = "";
  return (
    <nav
      className={`py-[15px] border-t border-[var(--blue-light)] ${props.className}`}
    >
      <div className="container !py-0 !flex items-center">
        {breadcrumbs.length > 1 &&
          breadcrumbs.map(function (item, index) {
            path += `/${item}`;
            return (
              <>
                <Link
                  href={path}
                  key={index}
                  className={`p1 font-semibold ${
                    index == breadcrumbs.length - 1
                      ? "text-blue-light"
                      : "text-blue"
                  } hover:text-blue-light transition`}
                >
                  {t(item)}
                </Link>
                {index != breadcrumbs.length - 1 && (
                  <svg
                    className="ml-[5px] text-blue-light transition"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 4.50024L16.5 12.0002L9 19.5002"
                      stroke="#5E9599"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </>
            );
          })}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
