import { useDispatch } from "react-redux";

import { removeUser } from '../../../store/slices/userSlice';
import { useAuth } from '../../../hooks/use-auth';

// import { useTranslation } from "react-i18next";

import LogoutIcon from '@mui/icons-material/Logout';

import s from "./user-menu.module.css";

const UserMenu = () => {

  const dispatch = useDispatch();
  // const { t } = useTranslation();

  const {email} = useAuth();

  return (
    <div className={s.wrapper}>
      <button onClick={()=> dispatch(removeUser())} className={s.btn} type="button">
         <span className={s.email}>{email}</span>  <LogoutIcon></LogoutIcon>
      </button>
    </div> 
  );
};

export default UserMenu;
