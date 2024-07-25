import { ReactNode } from "react";
import styled from "styled-components";

interface MessageInfoProps {
    statusMessage?: ReactNode;
    time: string;
    isPinned?: boolean;
}

const MessageInfoWrapper = styled('div')`
    height: 100%;
    display: grid;
    grid-template-rows: 50% 50%;
    align-self: self-start;
    justify-self: end;
`

const FirstRow = styled('div')`
    display: flex;
`

const SecondRow = styled('div')`
    justify-self: end;
`

const MessageInfo = ({ statusMessage, time, isPinned }: MessageInfoProps) => {
    return (
        <MessageInfoWrapper>
            <FirstRow>
                {statusMessage}
                {time}
            </FirstRow>
            <SecondRow>
                {isPinned ? 'pin' : ''}
            </SecondRow>
        </MessageInfoWrapper>
    )
};

export default MessageInfo;