import AuthReturn from "./AuthReturn";
import { AuthButton, AuthInput, AuthInputWrapper, AuthLabel, AuthTitle } from "./styles";
import { forgotUrl } from "./authLinks";

export default function ChangePassword() {

    // ToDo
    const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

    }
    

    return (
        <>
            <AuthReturn to={forgotUrl} />

            <AuthTitle>Смена пароля</AuthTitle>
            <AuthInputWrapper>
                <AuthLabel htmlFor="f-password" >Пароль</AuthLabel>
                <AuthInput id="f-password" type="password" placeholder="--------" />
            </AuthInputWrapper>

            <AuthInputWrapper>
                <AuthLabel htmlFor="r-password" >Пароль(Повторно)</AuthLabel>
                <AuthInput id="r-password" type="password" placeholder="--------" />
            </AuthInputWrapper>

            <AuthButton onClick={(e) => handleClick(e)}>Сменить пароль</AuthButton>
        </>
    )
}
