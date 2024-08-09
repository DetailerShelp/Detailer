import SvgHelper from "@/common/svg-helper/SvgHelper";
import { SendingMessageInput, SendingMessageWrapper } from "@/common/components/comments/SendingMessage/styles";
import { useState } from "react";
import { useCreateCommentMutation } from "@/store/reducers/comments/commentsApi";
import { useAppSelector } from "@/common/hooks/useAppSelector";

// ToDo
export default function SendingMessage() {
    const [message, setMessage] = useState('');
    const { isAnswer, comment } = useAppSelector(state => state.newCommentReducer)
    const [createComment] = useCreateCommentMutation();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }

    const handleSend = () => {
        createComment({
            isAnswer: isAnswer,
            comment: {
                ...comment,
                message: message
            }
        })
    }

    return (
        <SendingMessageWrapper>
            <SvgHelper iconName="bell" height="26px" width="26px" />
            <SendingMessageInput value={message} onChange={handleChange} placeholder="Комментарий" />
            <SvgHelper iconName="arrowRight" height="26px" width="26px" onClick={handleSend} />
        </SendingMessageWrapper>
    )
}