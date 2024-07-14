import { useNavigate } from 'react-router-dom';
import AuthReturn from '@/modules/auth/AuthReturn';
import { AuthDescription, AuthInputWrapper, AuthLabel, AuthTitle } from '@/modules/auth/styles'
import { changeUrl, loginUrl } from '@/modules/auth/authLinks';
import AuthButton from '@/modules/auth/components/AuthButton';
import { AuthInput } from '@/common/styles/tags/input/AuthInput';

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
            <AuthButton title="Отправить" clickFuntion={handleClick}/>
        </>
    )
}
