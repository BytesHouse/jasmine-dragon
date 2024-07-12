import { useState } from "react";
import { useTranslations } from "next-intl";
import EyeIcon from "../icons/EyeIcon/EyeIcon";

const InputPassword = ({ isWithConfirm = false, password, setPassword }) => {
  const t = useTranslations("SignInUp");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [showConfirmPass, setShowConfirmPass] = useState(true);

  const handleClickShowPass = () => setShowPass(!showPass);
  const handleClickShowConfirmPass = () => setShowConfirmPass(!showConfirmPass);

  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex flex-col gap-[15px] relative">
        {/* <label htmlFor="password">{t("parola")}</label> */}
        <label
          className="text-p1 font-semibold text-blue-light"
          htmlFor="password"
        >
          {t("parola")}
        </label>
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
      {isWithConfirm && (
        <div className="flex flex-col gap-[15px] relative">
          {/* <label htmlFor="confirm-password">{t("confirm_parola")}</label> */}
          <label
            className="text-p1 font-semibold text-blue-light"
            htmlFor="confirm-password"
          >
            {t("confirm_parola")}
          </label>
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
      )}
    </div>
  );
};

export default InputPassword;
