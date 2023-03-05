import { useTranslation } from "react-i18next";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import s from "./profile-page.module.css";

const ProfilePage = () => {

    const { t } = useTranslation();

    return (
        <div className={s.wrapper}>
            <AccountCircleIcon className={s.icon} fontSize="large"></AccountCircleIcon>
            <h1 className={s.title}>{t("profile")}</h1>
        </div>
    )
}

export default ProfilePage;
