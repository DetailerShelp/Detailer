import { AuthInputWrapper, AuthLabel, AuthTitle } from "@/modules/auth/styles";
import { AuthInput } from "@/common/styles/tags/input/AuthInput";
import { forgotUrl } from "@/modules/auth/authLinks";
import AuthReturn from "@/modules/auth/AuthReturn";
import AuthButton from "@/modules/auth/components/AuthButton";


export default function ChangePassword() {

    // ToDo
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
                <AuthInput id="r-password" type="password" placeholder="--------"/>
            </AuthInputWrapper>

            <AuthButton title="Сменить пароль" clickFuntion={handleClick} />
        </>
    )
}
