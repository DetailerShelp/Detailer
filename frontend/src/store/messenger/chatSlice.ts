import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChat, IMessage } from "@/store/messenger/messengerTypes";
import { Mok } from "./Mok";

export interface NewMes {
    text: string;
    chatId: number | string;
};

export interface NewMesMedia {
    text?: string;
    chatId: number | string;
    media: File;
};

export interface Chats {
    [key: number | string]: IChat;
};

const initialState: Chats = {
    1: Mok,
};

const chatSlice = createSlice({
    name: 'chatSlice',
    initialState,
    reducers: {
        addNewMessage(state, action: PayloadAction<NewMes>) {
            const { text, chatId } = action.payload;
            const mes: IMessage = {
                id: 5,
                text: text,
                author: "Ilia",
                createdAt: "12:18",
            };
            state[chatId].messages.push(mes);
        },

        addNewMessageMedia(state, action: PayloadAction<NewMesMedia>) {
            const { text, chatId, media } = action.payload;
            const mes: IMessage = {
                id: 5,
                text: text,
                author: "Ilia",
                createdAt: "12:18",
                media: media,
            };
            state[chatId].messages.push(mes);
        },
    }

    // setNewCourseTitle(state, action: PayloadAction<string>) {
    //     state.title = action.payload;
    //   },
});

export const newChatReducer = chatSlice.reducer;
export const newChatActions = chatSlice.actions;