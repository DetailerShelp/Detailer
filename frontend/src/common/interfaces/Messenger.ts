import { User } from "@/common/interfaces/User";

export interface Message {
    id: number | string; //в зависимости как бэк реализуем
    text: string;
    author: User;
    createdAt: Date;
    isUpdated?: boolean;
    answeredMessage?: number | string; //указатель на id сообщения на которое мы ответили
}

export interface Chat {
    id: number | string;
    messages: Message[];
    participants: User[];
    pinnedPosition?: number; //если чат закреплен то показывает позицию
    nameGroup?: string; //если участников больше двух, то есть это беседа на трех и более участников
    avatarGroup?: string; //url аватарки беседы
}
