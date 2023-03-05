import { useTranslation } from "react-i18next";

import HomeIcon from '@mui/icons-material/Home';

import s from "./home-page.module.css";

const HomePage = () => {
    
    const { t } = useTranslation();

    return (
        <div className={s.wrapper}>
            <HomeIcon className={s.icon} fontSize="large"></HomeIcon>
            <h1 className={s.title}>{t("home")}</h1>
        </div>
        
    )
}

export default HomePage;
