import { ToastInfo } from "@/common/toast/interface";

export const editProfileSuccess: ToastInfo = {
    message: 'Успех',
    description: 'Профиль успешно изменен'
};

export const editProfileDefaultInfo: ToastInfo = {
    message: 'Информация',
    description: 'Профиль не изменен'
};

export const profileQuitSuccess: ToastInfo = {
    message: 'Успех',
    description: 'Вы успешно вышли из аккаунта'
};

export const profileBlockInfo: ToastInfo = {
    message: 'Информация',
    description: 'Вы заблокировали пользователя'
};

export const profileUnlockInfo: ToastInfo = {
    message: 'Информация',
    description: 'Вы разблокировали пользователя'
};