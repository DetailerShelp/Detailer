export interface SwitchTextObject {
    common: string,
    link: string,
    to: string
}

export const loginText: SwitchTextObject = {
    common: "У вас нет аккаунта?",
    link: "Зарегистрироваться",
    to: "/auth/reg"
}

export const regText: SwitchTextObject = {
    common: "У вас уже есть аккаунт?",
    link: "Войти в систему",
    to: "/auth/login"
}