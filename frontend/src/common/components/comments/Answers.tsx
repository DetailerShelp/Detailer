import { CommentType } from "@/store/reducers/comments/commentsApi";
import { CommentsWrapper } from "./styles";
import AnswerToComment from "./AnswerToComment";

interface AnswersProps {
    answers: CommentType[]
}

export default function Answers({answers}: AnswersProps) {

    return (
        <CommentsWrapper>
            {answers.map((answer) => <AnswerToComment key={answer.id} answer={answer}/>)}
        </CommentsWrapper>
    )
}
