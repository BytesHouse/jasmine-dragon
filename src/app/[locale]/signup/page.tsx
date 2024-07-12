"use client";

import { useState } from "react";
// import {useTranslation} from "react-i18next";
const reg = "/assets/Images/registration.png";
// import reg from "../../../../../public/assets/Images/registration.png";
// import { Link, useNavigate } from "react-router-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
import Checkbox from "@/ui-kit/Checkbox/Checkbox";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import AuthButton from "@/ui-kit/AuthButton/AuthButton";
import SocialButtons from "@/ui-kit/SocialButtons/SocialButtons";
import InputPassword from "@/ui-kit/InputPassword/InputPassword";

const Registration = () => {
  // const {t} = useTranslation();
  //   const navigate = useNavigate();
  const { push } = useRouter();
  const t = useTranslations("SignInUp");
  const lang = useLocale();

  //   cont {email, password} = useRegistrationForm();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [acceptPrivacy, setAcceptPrivacy] = useState(true);

  const onSubmit = async (e) => {
    console.log(password);
    e.preventDefault();
    if (!acceptPrivacy) return;
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // navigate("/login");
        push("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <main className="container">
      <div className="gap-[25px] flex flex-col col-span-half">
        <div className="flex flex-col gap-[5px]">
          <h4 className="simple font-semibold">{t("registration")}</h4>
          <p className="p1">{t("reg_to_buy")}</p>
        </div>
        <form className="max-w-[515px] flex flex-col gap-[15px]">
          <label
            className="text-p1 font-semibold text-blue-light"
            htmlFor="email-address"
          >
            E-mail
          </label>
          <input
            className="inp-place text-blue-light h-[55px] border border-blue-light outline-none px-[25px] bg-green-bg focus:bg-green-light"
            type="email"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
          />

          <InputPassword
            isWithConfirm={true}
            password={password}
            setPassword={setPassword}
          />

          <div>
            <Checkbox
              isCurr={acceptPrivacy}
              setIsCurr={() => setAcceptPrivacy(!acceptPrivacy)}
            >
              Я принимаю{" "}
              <Link href={`/${lang}/privacy`}>
                <u>Политику конфиденциальности</u>
              </Link>
            </Checkbox>
          </div>
          <AuthButton onClick={onSubmit}>{t("reg_butt")}</AuthButton>
        </form>
        <SocialButtons>{t("reg_social")}</SocialButtons>
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

export default Registration;
