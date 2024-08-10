import { CommentType } from "@/store/reducers/comments/commentsApi";
import CommentItem from "./CommentItem";
import { CommentThread } from "./styles";
import { useActions } from "@/store/actions";
import { useEffect } from "react";

interface AnswersToCommentProps {
    answer: CommentType
}

export default function AnswerToComment({answer}: AnswersToCommentProps) {
    const {author, message, parentId, likes} = answer;
    const {setParentId, changeNewMessageType} = useActions();

    const handleClick = () => {
        changeNewMessageType(false);
    }

    useEffect(() => {
        setParentId(parentId || -1);
    }, []);

    return (
        <CommentThread>
            <CommentItem author={author} likes={likes} onclick={handleClick}>
                {message}
            </CommentItem>
        </CommentThread>
    )
}
