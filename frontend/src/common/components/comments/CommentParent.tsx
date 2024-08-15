import { CommentType } from "@/store/reducers/comments/commentsApi";
import CommentItem from "./CommentItem";
import { CommentThread } from "./styles";
import AnswersDropDown from "./AnswersDropDown";
import { useActions } from "@/store/actions";
import { useEffect } from "react";

interface CommentParentProps {
    comment: CommentType
}

export default function CommentParent({ comment }: CommentParentProps) {
    const { author, message, likes } = comment;
    const { setAnswersCount, changeNewMessageType } = useActions();

    const handleClick = () => {
        changeNewMessageType(true);
    }

    useEffect(() => {
        setAnswersCount(0);
    }, []);

    return (
        <CommentThread>
            <CommentItem author={author} likes={likes} onclick={handleClick}>
                {message}
            </CommentItem>
            <AnswersDropDown parentId={comment.id} />
        </CommentThread>
    )
}
