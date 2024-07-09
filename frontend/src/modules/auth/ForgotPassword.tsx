import { AuthBackLink, AuthBackLinkImg, AuthButton, AuthDescription, AuthInput, AuthInputWrapper, AuthLabel, AuthTitle } from './styles'
import arrowLeft from "@/common/svg-helper/arrow-left.svg";

export default function ForgotPassword() {
    return (
        <>
            <AuthBackLink to='/auth/login'>
                <AuthBackLinkImg src={arrowLeft} />
            </AuthBackLink>
            <AuthTitle>Забыли пароль?</AuthTitle>
            <AuthDescription>
                На ваш Email было отправлено письмо с кодом подтверждения аккаунта.
                Пожалуйста, введите данный код.
            </AuthDescription>
            <AuthInputWrapper>
                <AuthLabel htmlFor="confirm-code" >Код подтверждения</AuthLabel>
                <AuthInput id="confirm-code" type='password' placeholder="--------" />
            </AuthInputWrapper>
            <AuthButton>Отправить</AuthButton>
        </>
    )
}
