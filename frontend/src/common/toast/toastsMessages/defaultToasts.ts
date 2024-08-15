import { ToastInfo } from "@/common/toast/interface";

export const defaultError: ToastInfo = {
    message: 'Ошибка',
    description: 'Упс, что-то пошло не так'
};

export const defaultInfo: ToastInfo = {
    message: 'Информация',
    description: 'Наш проект самый лучший'
};

export const defaultWarning: ToastInfo = {
    message: 'Предупреждение',
    description: 'Данное действие невозможно'
};

export const defaultSuccess: ToastInfo = {
    message: 'Успех',
    description: 'Действие выполнено успешно'
};
