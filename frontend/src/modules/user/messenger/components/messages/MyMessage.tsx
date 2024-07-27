import SvgHelper from "@/common/svg-helper/SvgHelper";
import { useRef, useState } from "react";
import {
    MessageContent,
    MessageTime,
    MessageInfo,
    MyMessageWrapper,
    MessageText
} from "@/modules/user/messenger/components/messages/style";
import MessageDropdownMenu from "@/modules/user/messenger/components/DropMenu/MessageDropdownMenu";
import RenderMedia from "../render/RenderMedia";

interface MessageProps {
    text?: string;
    time: string;
    media?: File;
}

const MyMessage = ({ text, time, media }: MessageProps) => {
    const [focus, setFocus] = useState(false);
    const [dropdownIsOpen, setDropdownOpen] = useState(false);
    const MyMessage = useRef<HTMLDivElement>(null);

    const handleRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setFocus(true);
        setDropdownOpen(true);
    };

    const handleBlur = async () => {
        await setTimeout(() => {
            setFocus(false);
            setDropdownOpen(false);
        }, 100);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text || '')
    };

    return (
        <MyMessageWrapper
            ref={MyMessage}
            tabIndex={0}
            onContextMenu={handleRightClick}
            onBlur={handleBlur}
            isFocus={focus} >

            <MessageContent>
                <RenderMedia media={media || undefined} withTitle={false} />
                {text && <MessageText>
                    {text}
                </MessageText>}
            </MessageContent>

            <MessageInfo>
                <MessageTime>
                    {time}
                </MessageTime>
                <SvgHelper iconName="sent" width="15" height="15" />
            </MessageInfo>

            {dropdownIsOpen && <MessageDropdownMenu handleCopy={handleCopy} />}
        </MyMessageWrapper>
    )
};

export default MyMessage;