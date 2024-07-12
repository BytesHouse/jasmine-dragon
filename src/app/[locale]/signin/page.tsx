"use client";

// import {useNavigate} from "react-router-dom";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { auth } from "@/config/firebase";
// import reg from "../../../../public/assets/Images/registration.png";
const reg = "/assets/Images/registration.png";
// import {useTranslation} from "react-i18next";
import { signInWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import AuthButton from "@/ui-kit/AuthButton/AuthButton";
import SocialButtons from "@/ui-kit/SocialButtons/SocialButtons";
import InputPassword from "@/ui-kit/InputPassword/InputPassword";

const LoginPage = () => {
  // const {t} = useTranslation();
  const t = useTranslations("SignInUp");
  const lang = useLocale();
  // const navigate = useNavigate();
  const { push } = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // navigate("/profile")
        push(`/${lang}/profile`);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <main className="container">
      <div className="gap-[25px] flex flex-col col-span-half">
        <div className="flex flex-col gap-[5px]">
          <h4 className="simple font-semibold">{t("sign_in")}</h4>
          <p className="p1">{t("sign_to_buy")}</p>
        </div>
        <form className="max-w-[515px] flex flex-col gap-[25px]">
          <div className="flex flex-col gap-[15px]">
            <div className="flex flex-col gap-[15px] relative">
              <label
                className="text-p1 font-semibold text-blue-light"
                htmlFor="email-address"
              >
                E-mail
              </label>
              <input
                className="inp-place text-blue-light h-[55px] border border-blue-light outline-none px-[25px] bg-green-bg focus:bg-green-light"
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <InputPassword password={password} setPassword={setPassword} />
          </div>

          <div className="flex gap-[15px]">
            <AuthButton onClick={onLogin}>{t("login_butt")}</AuthButton>
            <Link
              href={`/${lang}/signup`}
              className="max-h-max flex-1 p-[15px] flex justify-center items-center text-blue p1 font-semibold hover:text-blue-light"
            >
              {t("reg_butt")}
            </Link>
          </div>

          <div className="flex items-center gap-[5px]">
            <svg width={36} height={36} fill="none">
              <path
                d="M18 31.5c7.456 0 13.5-6.044 13.5-13.5S25.456 4.5 18 4.5 4.5 10.544 4.5 18 10.544 31.5 18 31.5z"
                stroke="#5E9599"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 27a1.687 1.687 0 100-3.375A1.687 1.687 0 0018 27z"
                fill="#5E9599"
              />
              <path
                d="M18 20.25v-1.125a3.938 3.938 0 10-3.938-3.937"
                stroke="#5E9599"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="p1 text-blue flex gap-[5px]">
              Забыли пароль? Тыкните
              <Link
                href={`/${lang}/password_reset`}
                className="hover:text-blue-light transition"
              >
                сюда
              </Link>
            </p>
          </div>

          <SocialButtons>{t("signin_social")}</SocialButtons>
        </form>
      </div>
      <Image
        className="col-span-half"
        src={reg}
        alt="coffee"
        width={747}
        height={747}
      />
    </main>
  );
};

export default LoginPage;
