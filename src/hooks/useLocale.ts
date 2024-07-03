import { cookies } from "next/headers";

const useLocale = () => {
  const cookieStore = cookies();
  const lang = cookieStore.get("NEXT_LOCALE")!.value || "ro";
  return lang;
};

export default useLocale;
