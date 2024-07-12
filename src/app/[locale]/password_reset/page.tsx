"use client";

import { useState } from "react";
const reg = "/assets/Images/registration.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import AuthButton from "@/ui-kit/AuthButton/AuthButton";
import InputPassword from "@/ui-kit/InputPassword/InputPassword";

const PasswordReset = () => {
  // const {t} = useTranslation();
  //   const navigate = useNavigate();
  const { push } = useRouter();
  const t = useTranslations("SignInUp");
  const lang = useLocale();

  //   cont {email, password} = useRegistrationForm();
  const [password, setPassword] = useState("");

  const onReset = async (e) => {
    e.preventDefault();
    alert("надо доделать логику");
    //какаяя-то логика
  };

  return (
    <main className="container">
      <div className="gap-[25px] flex flex-col col-span-half">
        <div className="flex flex-col gap-[5px]">
          <h4 className="simple font-semibold">{t("reset")}</h4>
          <p className="p1">{t("reset_text")}</p>
        </div>
        <form className="max-w-[515px] flex flex-col gap-[25px]">
          <InputPassword
            isWithConfirm={true}
            password={password}
            setPassword={setPassword}
          />
          <AuthButton onClick={onReset}>Сбросить</AuthButton>
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

export default PasswordReset;
