import SignUp from '../../components/SignUp';
import { Link } from 'react-router-dom';

import { useTranslation } from "react-i18next";

import s from "./register-page.module.css";

const RegisterPage = () => {

    const { t } = useTranslation();

    return (
        <div>
            <h1 className={s.title}>{t("register")}</h1>
            <SignUp />
            <p className={s.redirect}>
                {t("have-acc")} <Link to="/login">{t("sign-in")}</Link>   
            </p>            
        </div>
    )
}

export default RegisterPage;
