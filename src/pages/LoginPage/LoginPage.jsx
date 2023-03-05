import Login from '../../components/Login';
import { Link } from 'react-router-dom';

import { useTranslation } from "react-i18next";

import s from "./login-page.module.css";

const LoginPage = () => {

    const { t } = useTranslation();

    return (
        <div>
            <h1 className={s.title}>{t("login")}</h1>
            <Login />
            <div className={s.redirect}>
                {t("or")} <Link to="/register">{t("register")}</Link>
            </div>
        </div>
    )
}

export default LoginPage;
