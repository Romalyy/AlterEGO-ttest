import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from '../Form';
import { setUser } from '../../store/slices/userSlice';

import { useTranslation } from "react-i18next";


const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { t } = useTranslation();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/');
            })
            .catch(console.error)
    }

    return (
        <Form
            title={t("register")}
            handleClick={handleRegister}
        />
    )
}

export default SignUp;
