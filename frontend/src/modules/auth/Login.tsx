import { AuthButton, AuthInput, AuthInputWrapper, AuthLabel, AuthLink, AuthSeparator } from "./styles";

export default function Login() {
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

            <AuthButton>Войти</AuthButton>

            <AuthSeparator></AuthSeparator>

            <AuthLink to="/auth/forgot">Забыли пароль?</AuthLink>
        </>
    )
}
