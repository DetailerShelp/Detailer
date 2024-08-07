import SvgHelper from "@/common/svg-helper/SvgHelper";
import { SendingMessageInput, SendingMessageWrapper } from "@/common/components/comments/SendingMessage/styles";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/common/hooks/useAppselector";
import { useActions } from "@/store/actions";

// ToDo
export default function SendingMessage() {
    const [message, setMessage] = useState('');
    const whom = useAppSelector(state => state.answerWhomReducer.message)

    const {resetAnswerWhom} = useActions();

    useEffect(() => {
        if (whom.length > 0) {
            setMessage(prev => whom + prev);
        } else {
            setMessage('');
        }
    }, [whom])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.target.value;
        if (currentValue.length < whom.length && whom.length > 0) {
            resetAnswerWhom();
        } else {
            setMessage(currentValue)
        }
    }

    return (
        <SendingMessageWrapper>
            <SvgHelper iconName="bell" height="26px" width="26px" />
            <SendingMessageInput value={message} onChange={handleChange} placeholder="Комментарий" />
            <SvgHelper iconName="arrowRight" height="26px" width="26px"  onClick={() => {}}/>
        </SendingMessageWrapper>
    )
}