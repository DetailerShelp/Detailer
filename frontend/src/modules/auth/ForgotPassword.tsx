import { useNavigate } from 'react-router-dom';
import AuthReturn from './AuthReturn';
import { AuthButton, AuthDescription, AuthInput, AuthInputWrapper, AuthLabel, AuthTitle } from './styles'
import { changeUrl, loginUrl } from './authLinks';

export default function ForgotPassword() {
    const navigate = useNavigate();

    // ToDo
    const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        navigate(changeUrl);
    }
    
    return (
        <>
            <AuthReturn to={loginUrl} />

            <AuthTitle>Забыли пароль?</AuthTitle>
            <AuthDescription>
                На ваш Email было отправлено письмо с кодом подтверждения аккаунта.
                Пожалуйста, введите данный код.
            </AuthDescription>
            <AuthInputWrapper>
                <AuthLabel htmlFor="confirm-code" >Код подтверждения</AuthLabel>
                <AuthInput id="confirm-code" type='password' placeholder="--------" />
            </AuthInputWrapper>
            <AuthButton onClick={(e) => handleClick(e)}>Отправить</AuthButton>
        </>
    )
}
