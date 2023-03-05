import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from '../Form';
import { setUser } from '../../store/slices/userSlice';

import { useTranslation } from "react-i18next";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { t } = useTranslation();
    
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/');
            })
            .catch(() => alert('Invalid user!'))
    }

    return (
        <Form
            title={t("login")}
            handleClick={handleLogin}
        />
    )
}

export default Login;
