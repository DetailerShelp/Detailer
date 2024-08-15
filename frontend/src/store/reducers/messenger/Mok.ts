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
    text: "I am too)4er fer fe rf er f erf er fw rf we rf werf we rf wer f ewrf we rf werf w rf w rf w fr werf we rf wer fwe rf wer few r g wrt g yh y h ety he yth ert g ert gre tg ertgert gre tg er tg ert ger th ",
    author: 'Artem',
    createdAt: '12:19',
};

export const AnswerAnswer5: IMessage = {
    id: 5,
    text: "I am too)5s d sd f sdf sd fs df sd f sdf sd f sd fs df s df sd fs df sd f sd f s er f er w rf wer fw er",
    author: 'Artem',
    createdAt: '12:19',
};

export const AnswerAnswer6: IMessage = {
    id: 6,
    text: "I am too)6 vertgertertgrtgvert rvtgrvtgrtg rtgvretverh36vh trherthertherhver ",
    author: 'Artem',
    createdAt: '12:19',
};

export const AnswerAnswer7: IMessage = {
    id: 7,
    text: "I am too)7q qrfqref erfeferxwfcer ervgergtregert rvtgertgrtg vrtgrtgv ertvertherythehverth rtvherth",
    author: 'Artem',
    createdAt: '12:19',
    answeredMessage: 1,
};

export const AnswerAnswer8: IMessage = {
    id: 8,
    text: "I am too)8 sdcs sdcsdc sdcsdcs dcsdcsdrev dscsdrfwe",
    author: 'Ilia',
    createdAt: '12:19',
    answeredMessage: 2,
};

export const AnswerAnswer9: IMessage = {
    id: 9,
    text: "I am too)9 sfwrferf erf er fe rf erf e rf erf e rf",
    author: 'Artem',
    createdAt: '12:19',
};

export const AnswerAnswer10: IMessage = {
    id: 10,
    text: "I am too)10re  re fe rf er fe rf er f erf e rf er f3 f 3  3 f 3f  ferferf",
    author: 'Artem',
    createdAt: '12:19',
};

export const AnswerAnswer11: IMessage = {
    id: 11,
    text: "I am too)11 er er f er f werg  tg wtg 3 g 3gt ",
    author: 'Ilia',
    createdAt: '12:19',
};

export const AnswerAnswer12: IMessage = {
    id: 12,
    text: "I am too)12 dc sc s v re fer f ",
    author: 'Artem',
    createdAt: '12:19',
};

export const AnswerAnswer13: IMessage = {
    id: 13,
    text: "I am too)13 sdfs df sd f sdf sd fre f w rf wer fvwe rv wer  wtt",
    author: 'Ilia',
    createdAt: '12:19',
};

export const Mok: IChat = {
    id: 1,
    messages: [Hello, HowAreYou, Answer, AnswerAnswer, AnswerAnswer5, AnswerAnswer6, AnswerAnswer7, AnswerAnswer8, AnswerAnswer9, AnswerAnswer10, AnswerAnswer11, AnswerAnswer12, AnswerAnswer13],
    participants: ['ilia', 'Artem'],
    speaker: true,
}

export const Mok1: IChat = {
    id: 2,
    messages: [Hello, HowAreYou, Answer, AnswerAnswer, AnswerAnswer5, AnswerAnswer6, AnswerAnswer7, AnswerAnswer8, AnswerAnswer9, AnswerAnswer10, AnswerAnswer11, AnswerAnswer12, AnswerAnswer13],
    participants: ['ilia', 'Jaroslav'],
    speaker: true,
}