import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import reg from '../../../assets/Images/registration.png'
import {Link, useNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../../../config/firebase";
import EyeIcon from "../../../ui-kit/icons/EyeIcon/EyeIcon";
import Checkbox from "../../../ui-kit/Checkbox/Checkbox";

const RegBlock = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPass, setShowPass] = useState(true);
    const [showConfirmPass, setShowConfirmPass] = useState(true);
    const [acceptPrivacy, setAcceptPrivacy] = useState(true);

    const onSubmit = async (e) => {
        e.preventDefault();
        if(!acceptPrivacy) return;
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/login")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });
    }

    const handleClickShowPass = () => setShowPass(!showPass)
    const handleClickShowConfirmPass = () => setShowConfirmPass(!showConfirmPass)

    return (
        <div className="text-blue-light flex col-span-12">
            <div className="flex-1 flex flex-col gap-[25px]">
                <h1 className="text-[40px] font-[700]">{t('registration')}</h1>
                <h2>{t("reg_to_buy")}</h2>
                <form className='max-w-[515px] mt-[25px] flex flex-col gap-[15px]'>
                    <div className="flex flex-col gap-[15px]">
                        <label htmlFor="email-address">
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
                    </div>
                    <div className="flex flex-col gap-[15px] relative">
                        <label htmlFor="password">
                            {t('parola')}
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
                        <EyeIcon setState={handleClickShowPass} state={showPass}/>
                    </div>
                    <div className="flex flex-col gap-[15px] relative">
                        <label htmlFor="confirm-password">
                            {t('confirm_parola')}
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
                        <EyeIcon setState={handleClickShowConfirmPass} state={showConfirmPass}/>
                    </div>
                    <div>
                        <Checkbox isCurr={acceptPrivacy} setIsCurr={() => setAcceptPrivacy(!acceptPrivacy)}>Я принимаю <Link to={'/privacy'}><u>Политику Приватности</u></Link></Checkbox>
                    </div>
                    <button
                        className="self-start bg-blue-light text-black px-[50px] py-[15px]"
                        type="submit"
                        onClick={onSubmit}
                    >
                        {t('reg_butt')}
                    </button>
                </form>
                <div className="flex flex-col gap-[15px]">
                    <p className="text-[18px] font-[600]">{t('reg_social')}</p>
                    <div className="svgfooter">
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_96_2346)">
                                <path
                                    d="M18 0.491211C8.05896 0.491211 0 8.55017 0 18.4912C0 26.9325 5.81184 34.0159 13.6519 35.9613V23.992H9.94032V18.4912H13.6519V16.121C13.6519 9.99449 16.4246 7.15481 22.4395 7.15481C23.58 7.15481 25.5478 7.37873 26.3527 7.60193V12.5879C25.9279 12.5433 25.1899 12.521 24.2734 12.521C21.3221 12.521 20.1816 13.6391 20.1816 16.5458V18.4912H26.0611L25.051 23.992H20.1816V36.3595C29.0945 35.2831 36.0007 27.6943 36.0007 18.4912C36 8.55017 27.941 0.491211 18 0.491211Z"
                                    fill="#B5EAEE"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_96_2346">
                                    <rect width="36" height="36" fill="white" transform="translate(0 0.491211)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_96_2348)">
                                <path
                                    d="M18 3.73262C22.8094 3.73262 23.3789 3.75371 25.2703 3.83809C27.0281 3.91543 27.9773 4.21074 28.6102 4.45684C29.4469 4.78027 30.0516 5.17402 30.6773 5.7998C31.3102 6.43262 31.6969 7.03027 32.0203 7.86699C32.2664 8.4998 32.5617 9.45605 32.6391 11.2068C32.7234 13.1053 32.7445 13.6748 32.7445 18.4771C32.7445 23.2865 32.7234 23.8561 32.6391 25.7475C32.5617 27.5053 32.2664 28.4545 32.0203 29.0873C31.6969 29.924 31.3031 30.5287 30.6773 31.1545C30.0445 31.7873 29.4469 32.174 28.6102 32.4975C27.9773 32.7436 27.0211 33.0389 25.2703 33.1162C23.3719 33.2006 22.8023 33.2217 18 33.2217C13.1906 33.2217 12.6211 33.2006 10.7297 33.1162C8.97188 33.0389 8.02266 32.7436 7.38984 32.4975C6.55313 32.174 5.94844 31.7803 5.32266 31.1545C4.68984 30.5217 4.30312 29.924 3.97969 29.0873C3.73359 28.4545 3.43828 27.4982 3.36094 25.7475C3.27656 23.849 3.25547 23.2795 3.25547 18.4771C3.25547 13.6678 3.27656 13.0982 3.36094 11.2068C3.43828 9.44902 3.73359 8.4998 3.97969 7.86699C4.30312 7.03027 4.69688 6.42559 5.32266 5.7998C5.95547 5.16699 6.55313 4.78027 7.38984 4.45684C8.02266 4.21074 8.97891 3.91543 10.7297 3.83809C12.6211 3.75371 13.1906 3.73262 18 3.73262ZM18 0.491211C13.1133 0.491211 12.5016 0.512305 10.582 0.59668C8.66953 0.681055 7.35469 0.99043 6.21563 1.4334C5.02734 1.89746 4.02188 2.50918 3.02344 3.51465C2.01797 4.51309 1.40625 5.51855 0.942188 6.6998C0.499219 7.8459 0.189844 9.15371 0.105469 11.0662C0.0210938 12.9928 0 13.6045 0 18.4912C0 23.3779 0.0210938 23.9896 0.105469 25.9092C0.189844 27.8217 0.499219 29.1365 0.942188 30.2756C1.40625 31.4639 2.01797 32.4693 3.02344 33.4678C4.02188 34.4662 5.02734 35.085 6.20859 35.542C7.35469 35.985 8.6625 36.2943 10.575 36.3787C12.4945 36.4631 13.1062 36.4842 17.993 36.4842C22.8797 36.4842 23.4914 36.4631 25.4109 36.3787C27.3234 36.2943 28.6383 35.985 29.7773 35.542C30.9586 35.085 31.9641 34.4662 32.9625 33.4678C33.9609 32.4693 34.5797 31.4639 35.0367 30.2826C35.4797 29.1365 35.7891 27.8287 35.8734 25.9162C35.9578 23.9967 35.9789 23.385 35.9789 18.4982C35.9789 13.6115 35.9578 12.9998 35.8734 11.0803C35.7891 9.16777 35.4797 7.85293 35.0367 6.71387C34.5938 5.51855 33.982 4.51309 32.9766 3.51465C31.9781 2.51621 30.9727 1.89746 29.7914 1.44043C28.6453 0.997461 27.3375 0.688086 25.425 0.603711C23.4984 0.512305 22.8867 0.491211 18 0.491211Z"
                                    fill="#B5EAEE"/>
                                <path
                                    d="M18 9.24512C12.8953 9.24512 8.75391 13.3865 8.75391 18.4912C8.75391 23.5959 12.8953 27.7373 18 27.7373C23.1047 27.7373 27.2461 23.5959 27.2461 18.4912C27.2461 13.3865 23.1047 9.24512 18 9.24512ZM18 24.4889C14.6883 24.4889 12.0023 21.8029 12.0023 18.4912C12.0023 15.1795 14.6883 12.4936 18 12.4936C21.3117 12.4936 23.9977 15.1795 23.9977 18.4912C23.9977 21.8029 21.3117 24.4889 18 24.4889Z"
                                    fill="#B5EAEE"/>
                                <path
                                    d="M29.7703 8.8793C29.7703 10.0746 28.8 11.0379 27.6117 11.0379C26.4164 11.0379 25.4531 10.0676 25.4531 8.8793C25.4531 7.68399 26.4234 6.7207 27.6117 6.7207C28.8 6.7207 29.7703 7.69102 29.7703 8.8793Z"
                                    fill="#B5EAEE"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_96_2348">
                                    <rect width="36" height="36" fill="white" transform="translate(0 0.491211)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_96_2349)">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M36 18.4912C36 28.4323 27.9411 36.4912 18 36.4912C8.05888 36.4912 0 28.4323 0 18.4912C0 8.55009 8.05888 0.491211 18 0.491211C27.9411 0.491211 36 8.55009 36 18.4912ZM18.645 13.7796C16.8943 14.5078 13.3952 16.015 8.14784 18.3012C7.29575 18.64 6.84939 18.9715 6.80875 19.2957C6.74008 19.8435 7.42607 20.0592 8.3602 20.3529C8.48727 20.3928 8.61893 20.4342 8.75391 20.4781C9.67296 20.7769 10.9092 21.1264 11.5519 21.1403C12.1349 21.1529 12.7856 20.9125 13.504 20.4192C18.4067 17.1097 20.9376 15.4369 21.0965 15.4009C21.2086 15.3754 21.3639 15.3434 21.4691 15.437C21.5744 15.5305 21.5641 15.7077 21.5529 15.7552C21.4849 16.0449 18.7922 18.5484 17.3987 19.8439C16.9643 20.2478 16.6561 20.5342 16.5931 20.5997C16.452 20.7462 16.3082 20.8849 16.17 21.0181C15.3162 21.8412 14.6759 22.4584 16.2054 23.4664C16.9405 23.9508 17.5286 24.3513 18.1154 24.7509C18.7563 25.1873 19.3954 25.6226 20.2224 26.1647C20.4331 26.3028 20.6343 26.4463 20.8303 26.586C21.5761 27.1177 22.2461 27.5953 23.0739 27.5192C23.5549 27.4749 24.0517 27.0226 24.304 25.6737C24.9003 22.4859 26.0724 15.5789 26.3433 12.7327C26.3671 12.4833 26.3372 12.1642 26.3132 12.0241C26.2893 11.884 26.2392 11.6844 26.057 11.5366C25.8414 11.3616 25.5085 11.3247 25.3595 11.3273C24.6825 11.3393 23.6438 11.7004 18.645 13.7796Z"
                                      fill="#B5EAEE"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_96_2349">
                                    <rect width="36" height="36" fill="white" transform="translate(0 0.491211)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_96_2350)">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M2.5306 3.02181C0 5.55241 0 9.62531 0 17.7712V19.2112C0 27.3571 0 31.43 2.5306 33.9606C5.06119 36.4912 9.1341 36.4912 17.28 36.4912H18.72C26.8659 36.4912 30.9388 36.4912 33.4694 33.9606C36 31.43 36 27.3571 36 19.2112V17.7712C36 9.62531 36 5.55241 33.4694 3.02181C30.9388 0.491211 26.8659 0.491211 18.72 0.491211H17.28C9.1341 0.491211 5.06119 0.491211 2.5306 3.02181ZM6.07509 11.4413C6.27009 20.8013 10.9501 26.4263 19.1551 26.4263H19.6201V21.0713C22.6352 21.3713 24.915 23.5763 25.83 26.4263H30.0901C28.9201 22.1663 25.8449 19.8113 23.9249 18.9113C25.8449 17.8013 28.5449 15.1013 29.1899 11.4413H25.3199C24.4799 14.4113 21.9902 17.1113 19.6201 17.3663V11.4413H15.75V21.8213C13.35 21.2213 10.3201 18.3113 10.1851 11.4413H6.07509Z"
                                      fill="#B5EAEE"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_96_2350">
                                    <rect width="36" height="36" fill="white" transform="translate(0 0.491211)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
            <img className="w-full h-full flex-1" src={reg} alt="coffee"/>
        </div>
    );
};

export default RegBlock;