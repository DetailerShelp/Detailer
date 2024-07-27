import { User } from "@/common/interfaces/User";

{'TODO доделать интерфейс'}

export interface IMessage {
    id: number | string; //в зависимости как бэк реализуем
    text?: string;
    author: string; //временно
    createdAt: string; //временно
    media?: File; //продумать как файл передаеся, только url его или полностью файл
    isUpdated?: boolean;
    answeredMessage?: number | string; //указатель на id сообщения на которое мы ответили
};

export interface IChat {
    id: number | string;
    messages: IMessage[];
    participants: string[];
    pinnedPosition?: number; //если чат закреплен то показывает позицию
    nameGroup?: string; //если участников больше двух, то есть это беседа на трех и более участников
    avatarGroup?: string; //url аватарки беседы
};
