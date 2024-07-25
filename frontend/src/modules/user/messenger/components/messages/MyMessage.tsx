import SvgHelper from "@/common/svg-helper/SvgHelper";
import { useRef, useState } from "react";
import { 
    MessageContent, 
    MessageTime, 
    MessageInfo, 
    MyMessageWrapper 
} from "@/modules/user/messenger/components/messages/style";
import MessageDropdownMenu from "@/modules/user/messenger/components/DropMenu/MessageDropdownMenu";

interface MessageProps {
    text: string;
}

const MyMessage = ({ text }: MessageProps) => {
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
        navigator.clipboard.writeText(text)
    };

    return (
        <MyMessageWrapper
            ref={MyMessage}
            tabIndex={0}
            onContextMenu={handleRightClick}
            onBlur={handleBlur}
            isFocus={focus} >

            <MessageContent>
                {text}
            </MessageContent>

            <MessageInfo>
                <MessageTime>
                    22:16
                </MessageTime>
                <SvgHelper iconName="sent" width="15" height="15" />
            </MessageInfo>

            {dropdownIsOpen && <MessageDropdownMenu handleCopy={handleCopy} />}
        </MyMessageWrapper>
    )
};

export default MyMessage;