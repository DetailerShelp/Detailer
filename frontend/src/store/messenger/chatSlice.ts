import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChat, IForwardMessage, IMessage } from "@/store/messenger/messengerTypes";
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

export interface AnsweredMew {
    chatId: number | string;
    answeredMes: number | string | undefined;
};

export interface ChatMes {
    chatId: number | string;
    mesId: number | string | undefined;
};

export interface Chats {
    forwardMes?: IForwardMessage;
    chats: {
        [key: number | string]: IChat;
    }
};

const initialState: Chats = {
    chats: {
        1: Mok,
        2: Mok1,
    }
};

const chatSlice = createSlice({
    name: 'chatSlice',
    initialState,
    reducers: {
        addNewMessage(state, action: PayloadAction<NewMes>) {
            const { text, chatId } = action.payload;

            const mes: IMessage = {
                id: state.chats[chatId].messages.length,
                text: text,
                author: "Ilia",
                createdAt: "12:18",
                answeredMessage: state.chats[chatId].answeredMessages,
                forwardMessage: state.forwardMes,
            };
            state.chats[chatId].messages.push(mes);
            console.log(state.forwardMes?.chatId, mes);

            state.chats[chatId].answeredMessages = undefined;
            state.forwardMes = undefined;
        },

        addNewMessageMedia(state, action: PayloadAction<NewMesMedia>) {
            const { text, chatId, media } = action.payload;
            const mes: IMessage = {
                id: state.chats[chatId].messages.length,
                text: text,
                author: "Ilia",
                createdAt: "12:18",
                media: media,
            };
            state.chats[chatId].messages.push(mes);
            state.chats[chatId].answeredMessages = undefined;
        },

        addForwardMessage(state, action: PayloadAction<ChatMes>){
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
            console.log(state.chats[chatId]);
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

        changeNotification(state, action: PayloadAction<{ chatId: number | string }>){
            const { chatId } = action.payload;
            state.chats[chatId].notification = !state.chats[chatId].notification;
        },

        changeTheme(state, action: PayloadAction<NewMesMedia>){
            const {chatId, media} = action.payload;
            state.chats[chatId].theme = URL.createObjectURL(media);
        },
    }
});

export const newChatReducer = chatSlice.reducer;
export const newChatActions = chatSlice.actions;