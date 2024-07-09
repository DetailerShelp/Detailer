import { AuthBackLink, AuthBackLinkImg, AuthButton, AuthInput, AuthInputWrapper, AuthLabel, AuthTitle } from "./styles";
import arrowLeft from "@/common/svg-helper/arrow-left.svg";

export default function ChangePassword() {
    return (
        <>
            {/* вынести в отдельный компонент? */}
            <AuthBackLink to='/auth/forgot'>
                <AuthBackLinkImg src={arrowLeft} />
            </AuthBackLink>

            <AuthTitle>Смена пароля</AuthTitle>
            <AuthInputWrapper>
                <AuthLabel htmlFor="f-password" >Пароль</AuthLabel>
                <AuthInput id="f-password" type="password" placeholder="--------" />
            </AuthInputWrapper>

            <AuthInputWrapper>
                <AuthLabel htmlFor="r-password" >Пароль(Повторно)</AuthLabel>
                <AuthInput id="r-password" type="password" placeholder="--------" />
            </AuthInputWrapper>

            <AuthButton>Сменить пароль</AuthButton>
        </>
    )
}
