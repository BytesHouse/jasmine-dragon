"use client";

import { useState } from "react";
// import {useTranslation} from "react-i18next";
// import reg from "/assets/Images/registration.png";
import reg from "../../../../../public/assets/Images/registration.png";
// import { Link, useNavigate } from "react-router-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
import EyeIcon from "@/ui-kit/icons/EyeIcon/EyeIcon";
import Checkbox from "@/ui-kit/Checkbox/Checkbox";
import Image from "next/image";

// import facebook from "../../../../../public/assets/icons/facebook.svg";
// import instagram from "../../../../../public/assets/icons/instagram.svg";
// import telegram from "../../../../../public/assets/icons/telegram.svg";
// import vk from "../../../../../public/assets/icons/vk.svg";

const RegBlock = () => {
  // const {t} = useTranslation();
  //   const navigate = useNavigate();
  const { push } = useRouter();

  //   cont {email, password} = useRegistrationForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [showConfirmPass, setShowConfirmPass] = useState(true);
  const [acceptPrivacy, setAcceptPrivacy] = useState(true);

  const onSubmit = async (e) => {
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

  const handleClickShowPass = () => setShowPass(!showPass);
  const handleClickShowConfirmPass = () => setShowConfirmPass(!showConfirmPass);

  return (
    <div className="text-blue-light flex col-span-12">
      <div className="flex-1 flex flex-col gap-[25px]">
        <h1 className="text-[40px] font-[700]">t=="registration"</h1>
        {/* <h2>{t("reg_to_buy")}</h2> */}
        <h2>t=="reg_to_buy"</h2>
        <form className="max-w-[515px] mt-[25px] flex flex-col gap-[15px]">
          <div className="flex flex-col gap-[15px]">
            <label htmlFor="email-address">E-mail</label>
            <input
              className="inp-place text-blue-light h-[55px] border border-blue-light outline-none px-[25px] bg-green-bg focus:bg-green-light"
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email address"
            />
          </div>
          <div className="flex flex-col gap-[15px] relative">
            {/* <label htmlFor="password">{t("parola")}</label> */}
            <label htmlFor="password">t=="parola"</label>
            <input
              className="inp-place text-blue-light h-[55px] border border-blue-light outline-none px-[25px] bg-green-bg focus:bg-green-light"
              type={!showPass ? "text" : "password"}
              label="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
            <EyeIcon setState={handleClickShowPass} state={showPass} />
          </div>
          <div className="flex flex-col gap-[15px] relative">
            {/* <label htmlFor="confirm-password">{t("confirm_parola")}</label> */}
            <label htmlFor="confirm-password">t=="confirm_parola"</label>
            <input
              className="inp-place text-blue-light h-[55px] border border-blue-light outline-none pl-[25px] pr-[55px] bg-green-bg focus:bg-green-light"
              type={!showConfirmPass ? "text" : "password"}
              label="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confrim Password"
            />
            <EyeIcon
              setState={handleClickShowConfirmPass}
              state={showConfirmPass}
            />
          </div>
          <div>
            <Checkbox
              isCurr={acceptPrivacy}
              setIsCurr={() => setAcceptPrivacy(!acceptPrivacy)}
            >
              Я принимаю{" "}
              <Link href={"/privacy"}>
                <u>Политику Приватности</u>
              </Link>
            </Checkbox>
          </div>
          <button
            className="self-start bg-blue-light text-black px-[50px] py-[15px]"
            type="submit"
            onClick={onSubmit}
          >
            t=="reg_butt"
            {/* {t("reg_butt")} */}
          </button>
        </form>
        <div className="flex flex-col gap-[15px]">
          <p className="text-[18px] font-[600]">t=="reg_social"</p>
          <div className="svgfooter">
            <Image src="/assets/icons/facebook.svg" width={36} height={36} />
            <Image src="/assets/icons/instagram.svg" width={36} height={36} />
            <Image src="/assets/icons/vk.svg" width={36} height={36} />
            <Image src="/assets/icons/telegram.svg" width={36} height={36} />
          </div>
        </div>
      </div>
      <Image
        className="w-full h-full flex-1"
        src={reg}
        alt="coffee"
        width={747}
        height={747}
      />
    </div>
  );
};

export default RegBlock;
