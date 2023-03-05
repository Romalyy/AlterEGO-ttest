import { NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

import s from "./login-register.module.css";

const LoginAndRegister = () => {
  const { t } = useTranslation();

  const linkActive = ({ isActive }) => {
    return isActive ? s.activeLink : s.link;
  };
  return (
    <div className={s.wrapper}>
      <NavLink to={"/login"} className={linkActive}>
        {t("login")}
      </NavLink>
      |
      <NavLink to={"/register"} className={linkActive}>
        {t("register")}
      </NavLink>
    </div>
  );
};
export default LoginAndRegister;
