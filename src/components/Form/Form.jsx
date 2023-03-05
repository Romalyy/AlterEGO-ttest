import { useState } from 'react';

import { useTranslation } from "react-i18next";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import s from "./form.module.css";

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const { t } = useTranslation();

    return (
        <div className={s.form} >
            <div className={s.wrapper}>
                <TextField
                className={s.input}
                id="outlined-basic"
                label={t("login")}
                variant="outlined"
                placeholder="admin"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className={s.wrapper}>
                <TextField
                className={s.input}
                id="outlined-basic"
                label={t("pass")}
                variant="outlined"
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="12345"
            />
            </div>
            <Button
                className={s.button}
                variant="contained"
                onClick={() => handleClick(email, pass)}
            >{title}
            </Button>

        </div>
    )
}

export default Form;
