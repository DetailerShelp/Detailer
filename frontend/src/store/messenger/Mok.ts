import { IChat, IMessage } from "./messengerTypes";

export const Hello: IMessage = {
    id: 1,
    text: "hello, world",
    author: 'Ilia',
    createdAt: '12:16',
};

export const HowAreYou: IMessage = {
    id: 2,
    text: "Hi, How are you?",
    author: 'Artem',
    createdAt: '12:17',
};

export const Answer: IMessage = {
    id: 3,
    text: "I am fine, what about you?",
    author: 'Ilia',
    createdAt: '12:18',
};

export const AnswerAnswer: IMessage = {
    id: 4,
    text: "I am too)",
    author: 'Artem',
    createdAt: '12:19',
};

export const Mok: IChat = {
    id: 1,
    messages: [Hello, HowAreYou, Answer, AnswerAnswer],
    participants: ['ilia', 'Artem'],
}