import { forgotUrl } from "./authLinks";
import { AuthButton, AuthInput, AuthInputWrapper, AuthLabel, AuthLink, AuthSeparator } from "./styles";

export default function Login() {

    // ToDo
    const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

    }
    return (
        <>
            <AuthInputWrapper>
                <AuthLabel htmlFor="email" >Email</AuthLabel>
                <AuthInput id="email" type="email" placeholder="user@gmail.com" />
            </AuthInputWrapper>

            <AuthInputWrapper>
                <AuthLabel htmlFor="password" >Пароль</AuthLabel>
                <AuthInput id="password" type="password" placeholder="--------" />
            </AuthInputWrapper>

            <AuthButton onClick={(e) => handleClick(e)}>Войти</AuthButton>

            <AuthSeparator></AuthSeparator>

            <AuthLink to={forgotUrl}>Забыли пароль?</AuthLink>
        </>
    )
}
