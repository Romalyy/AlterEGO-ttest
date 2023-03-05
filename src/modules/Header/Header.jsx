import { NavLink } from "react-router-dom";
import { useAuth } from '../../hooks/use-auth';
import UserMenu from "./UserMenu";
import LoginAndRegister from "./LoginAndRegister";

import { useTranslation } from "react-i18next";

import s from "./header.module.css";

const Header = () => {

  const { isAuth } = useAuth();
  const { t, i18n } = useTranslation();

  const linkActive = ({ isActive }) => {
    return isActive ? s.activeLink : s.link;
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.nav}>
          {isAuth ? (
            <div>
              <NavLink to={"/profile"} className={linkActive}>
                {t("profile")}
              </NavLink>
              <NavLink to={"/"} className={linkActive}>
                  {t("home")}
                </NavLink>
                <NavLink to={"/news"} className={linkActive}>
                  {t("news")}
                </NavLink>
            </div>
          ) : (
              <div>
                <NavLink to={"/"} className={linkActive}>
                  {t("home")}
                </NavLink>
                <NavLink to={"/news"} className={linkActive}>
                  {t("news")}
                </NavLink>
                <NavLink to={"/"} className={s.link}>
                  {t("profile")}
                </NavLink>
              </div>
          )}
          <div>
            <button className={s.button} onClick={() => changeLanguage("en")}>EN</button>
            <button className={s.button} onClick={() => changeLanguage("uk")}>UK</button>
          </div>
          {isAuth ? <UserMenu /> : <LoginAndRegister />}
        </nav>

      </div>
    </header>
  );
};

export default Header;
