import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {auth} from "../../../../config/firebase";
import reg from "../../../../assets/Images/registration.png";
import {useTranslation} from "react-i18next";
import {signInWithEmailAndPassword} from 'firebase/auth'

const LogBlock = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/profile")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }
    return (
        <div className="text-blue-light flex col-span-12">
            <div className="flex-1">
                <h1 className="text-[40px] font-[700]">{t('sign_in')}</h1>
                <h2>{t("sign_to_buy")}</h2>
                <form>
                    <div>
                        <label htmlFor="email-address">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            required
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <button
                            onClick={onLogin}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <img className="w-full h-full flex-1" src={reg} alt="coffee"/>
        </div>
    );
};

export default LogBlock;