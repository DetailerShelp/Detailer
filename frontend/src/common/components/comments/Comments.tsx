import CommentItem from "./CommentItem"
import { CommentsWrapper } from "./styles"


export interface Comment {
    id: number,
    author: string,
    message: string,
    likes: number,
}

export interface Answer {
    parentId: number,
    comments: Comment[]
}

export const comments: Comment[] = [
    {
        id: 1,
        author: 'Ly12',
        message: "Как же красиво! Природа всегда вдохновляет",
        likes: 10,
    },
    {
        id: 2,
        author: 'IvanI',
        message: "Восхитительно! Хочу оказаться там!",
        likes: 2,
    },
    {
        id: 3,
        author: 'Elis',
        message: "Природа — лучший художник!",
        likes: 52,
    },
    {
        id: 4,
        author: 'Ly12',
        message: "Как же красиво! Природа всегда вдохновляет",
        likes: 10,
    },
    {
        id: 5,
        author: 'IvanI',
        message: "Восхитительно! Хочу оказаться там!",
        likes: 2,
    },
    {
        id: 6,
        author: 'Elis',
        message: "Природа — лучший художник!",
        likes: 52,
    },
    {
        id: 7,
        author: 'Ly12',
        message: "Как же красиво! Природа всегда вдохновляет",
        likes: 10,
    },
    {
        id: 8,
        author: 'IvanI',
        message: "Восхитительно! Хочу оказаться там!",
        likes: 2,
    },
    {
        id: 9,
        author: 'Elis',
        message: "Природа — лучший художник!",
        likes: 52,
    },
]

export const answers: Answer[] = [
    {
        parentId: 1,
        comments:
            [{
                id: 337,
                author: "Ytr",
                message: "Я никогда не видел таких удивительных животных!",
                likes: 0,
            },
            {
                id: 338,
                author: "Mimi",
                message: "Это видео вдохновляет на прогулку на свежем воздухе.",
                likes: 2,
            },]
    },
    {
        parentId: 2,
        comments:
            [{
                id: 339,
                author: "Liliya",
                message: "Здорово! Природа всегда вызывает приятные воспоминания. Надеюсь, у вас остались хорошие моменты",
                likes: 10,
            },]
    },
]

export default function Comments() {
    return (
        <CommentsWrapper>
            {
                comments.map((comment) => <CommentItem key={comment.id} comment={comment} />)
            }
        </CommentsWrapper>
    )
}
