import { useRef, useState } from "react";
import { MyMessageWrapper } from "@/modules/user/messenger/components/messages/style";
import MessageDropdownMenu from "@/modules/user/messenger/components/dropMenu/MessageDropdownMenu";
import { IForwardMessage } from "@/store/reducers/messenger/messengerTypes";
import useDataMessageStore from "@/modules/user/messenger/hooks/useDataMessageStore";
import MessageInfo from "@/modules/user/messenger/components/messages/components/MessageInfo"
import MessageContent from "@/modules/user/messenger/components/messages/components/MessageContent";
import ForwardMessage from "@/modules/user/messenger/components/messages/components/ForwardMessage";

interface MessageProps {
    text?: string;
    time: string;
    media?: File;
    chatId: number | string;
    mesId: number | string;
    answerMes?: number | string;
    forwardMes?: IForwardMessage;
    isEdited?: boolean;
    setOpenModal: (_: boolean) => void;
};

const MyMessage = ({
    text,
    time,
    media,
    chatId,
    mesId,
    answerMes,
    forwardMes,
    isEdited,
    setOpenModal,
}: MessageProps) => {
    const [focus, setFocus] = useState(false);
    const [dropdownIsOpen, setDropdownOpen] = useState(false);
    const MyMessage = useRef<HTMLDivElement>(null);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const { messages: currentMessages } = useDataMessageStore({ chatId: chatId });

    let forwardMessages;
    if (forwardMes) {
        const { messages } = useDataMessageStore({ chatId: forwardMes.chatId });
        forwardMessages = messages.find(message => message.id === forwardMes.mesId);
    }
    else {
        forwardMessages = currentMessages.find(message => message.id === answerMes);
    };

    const handleRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setX(e.clientX);
        setY(e.clientY);
        setFocus(true);
        setDropdownOpen(true);
    };

    const handleBlur = () => {
        setFocus(false);
        setTimeout(() => {
            setDropdownOpen(false);
        }, 250);
    };

    return (
        <MyMessageWrapper
            ref={MyMessage}
            tabIndex={0}
            onContextMenu={handleRightClick}
            onBlur={handleBlur}
            $isFocus={focus}
            $isFlex={(media || (text || '').length > 15 || forwardMessages) ? false : true}
        >

            <ForwardMessage forwardMessages={forwardMessages} isMine={true} />

            <MessageContent text={text} media={media} />

            <MessageInfo time={time} isEdited={isEdited} />

            <MessageDropdownMenu
                isOpen={dropdownIsOpen}
                mesId={mesId}
                chatId={chatId}
                text={text}
                media={media}
                setDropdownOpen={setDropdownOpen}
                setOpenModal={setOpenModal}
                x={x}
                y={y}
            />
        </MyMessageWrapper>
    )
};

export default MyMessage;