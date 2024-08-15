import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChat, IForwardMessage, IMessage } from "@/store/reducers/messenger/messengerTypes";
import { Mok, Mok1 } from "./Mok";

export interface NewMes {
    text: string;
    chatId: number | string;
};

export interface NewMesMedia {
    text?: string;
    chatId: number | string;
    media: File;
};

export interface EditMesMedia extends NewMesMedia {
    mesId: number | string;
}

export interface AnsweredMew {
    chatId: number | string;
    answeredMes: number | string | undefined;
};

export interface ChatMes {
    chatId: number | string;
    mesId: number | string | undefined;
};

export interface EditMes extends ChatMes {
    text?: string;
};

export interface Chats {
    forwardMes?: IForwardMessage;
    chats: {
        [key: number | string]: IChat;
    }
    idVREMENNO: number;
};

const initialState: Chats = {
    chats: {
        1: Mok,
        2: Mok1,
    },
    idVREMENNO: 20,
};

const chatSlice = createSlice({
    name: 'chatSlice',
    initialState,
    reducers: {
        addNewMessage(state, action: PayloadAction<NewMes>) {
            const { text, chatId } = action.payload;

            const mes: IMessage = {
                id: state.idVREMENNO,
                text: text,
                author: "Ilia",
                createdAt: "12:18",
                answeredMessage: state.chats[chatId].answeredMessages,
                forwardMessage: state.forwardMes,
            };
            state.chats[chatId].messages.push(mes);
            console.log(state.forwardMes?.chatId, mes);
            state.idVREMENNO++;

            if (state.chats[chatId].speaker) {
                const audio = new Audio('/sounds/call-new-message.mp3');
                audio.play().catch(error => {
                    console.error("Ошибка воспроизведения звука:", error);
                });
            }

            state.chats[chatId].answeredMessages = undefined;
            state.forwardMes = undefined;
        },

        addNewMessageMedia(state, action: PayloadAction<NewMesMedia>) {
            const { text, chatId, media } = action.payload;
            const mes: IMessage = {
                id: state.idVREMENNO,
                text: text,
                author: "Ilia",
                createdAt: "12:18",
                media: media,
            };

            state.idVREMENNO++;

            if (state.chats[chatId].speaker) {
                const audio = new Audio('/sounds/call-new-media.mp3');
                audio.play().catch(error => {
                    console.error("Ошибка воспроизведения звука:", error);
                });
            }

            state.chats[chatId].messages.push(mes);
            state.chats[chatId].answeredMessages = undefined;
        },

        addForwardMessage(state, action: PayloadAction<ChatMes>) {
            const { chatId, mesId } = action.payload;
            state.forwardMes = {
                chatId: chatId,
                mesId: mesId!,
            };
            console.log('sdsdfsd')
        },

        setAnsweredMessage(state, action: PayloadAction<AnsweredMew>) {
            const { chatId, answeredMes } = action.payload;
            state.chats[chatId].answeredMessages = answeredMes;
            state.chats[chatId].editedMessageId = undefined;
        },

        setEditedMessage(state, action: PayloadAction<ChatMes>) {
            const { chatId, mesId } = action.payload;
            state.chats[chatId].editedMessageId = mesId;
            state.chats[chatId].answeredMessages = undefined;
        },

        setTextMessage(state, action: PayloadAction<EditMes>) {
            const { chatId, mesId, text } = action.payload;
            state.chats[chatId].messages.some(mes => {
                if (mes.id === mesId) {
                    mes.text = text;
                    mes.isEdited = true;
                    return true;
                };
            });
            state.chats[chatId].editedMessageId = undefined;
        },

        setMediaMessage(state, action: PayloadAction<EditMesMedia>) {
            const { chatId, media, mesId } = action.payload;
            state.chats[chatId].messages.some((mes) => {
                if (mes.id === mesId) {
                    mes.media = media;
                    mes.isEdited = true;
                    return true;
                };
            });
            state.chats[chatId].editedMessageId = undefined;
        },

        setSpeakeMesasges(state, action: PayloadAction<{ chatId: number | string }>) {
            const {chatId} = action.payload;
            state.chats[chatId].speaker = !state.chats[chatId].speaker;
        },

        deleteForwardMessage(state, action: PayloadAction<{ chatId?: number | string }>) {
            const { chatId } = action.payload;
            if (chatId) {
                state.chats[chatId].answeredMessages = undefined;
            }
            state.forwardMes = undefined;
        },

        deleteMessage(state, action: PayloadAction<ChatMes>) {
            const { chatId, mesId } = action.payload;
            state.chats[chatId].messages = state.chats[chatId].messages.filter(message => message.id !== mesId);
        },

        pinMessage(state, action: PayloadAction<ChatMes>) {
            const { chatId, mesId } = action.payload;
            state.chats[chatId].pinnedMessage = mesId;
        },

        clearChatMessages(state, action: PayloadAction<{ chatId: number | string }>) {
            const { chatId } = action.payload;
            state.chats[chatId].messages = [];
            state.chats[chatId].answeredMessages = undefined;
            state.chats[chatId].pinnedMessage = undefined;
        },

        changeNotification(state, action: PayloadAction<{ chatId: number | string }>) {
            const { chatId } = action.payload;
            state.chats[chatId].notification = !state.chats[chatId].notification;
        },

        changeTheme(state, action: PayloadAction<NewMesMedia>) {
            const { chatId, media } = action.payload;
            state.chats[chatId].theme = URL.createObjectURL(media);
        },
    }
});

export const newChatReducer = chatSlice.reducer;
export const newChatActions = chatSlice.actions;