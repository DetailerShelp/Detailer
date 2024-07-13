import AuthButton from "./components/AuthButton";
import { AuthCheckBoxInput, AuthCheckBoxLabel, AuthCheckBoxWrapper, AuthInput, AuthInputWrapper, AuthLabel } from "./styles";

export default function Reg() {
    // ToDo
    const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

    }
    return (
        <>
            <AuthInputWrapper>
                <AuthLabel htmlFor="email">Email</AuthLabel>
                <AuthInput id="email" type="email" placeholder="user1234@gmail.com" />
            </AuthInputWrapper>

            <AuthInputWrapper>
                <AuthLabel id="password">Пароль</AuthLabel>
                <AuthInput name="password" type="password" placeholder="********" />
            </AuthInputWrapper>

            <AuthInputWrapper>
                <AuthLabel htmlFor="r-password">Пароль(Повторно)</AuthLabel>
                <AuthInput id="r-password" type="password" placeholder="********" />
            </AuthInputWrapper>

            <AuthInputWrapper>
                <AuthLabel htmlFor="password">Имя Пользователя</AuthLabel>
                <AuthInput id="password" type="text" placeholder="user1234" />
            </AuthInputWrapper>

            <AuthCheckBoxWrapper>
                <AuthCheckBoxInput id="agreement" type="checkbox" />
                <AuthCheckBoxLabel htmlFor="agreement">
                    Вы соглашаетесь с Политикой
                    Конфиденциальности
                </AuthCheckBoxLabel>
            </AuthCheckBoxWrapper>

            <AuthButton title="Зарегистрироваться" clickFuntion={handleClick}/>
        </>
    )
}
