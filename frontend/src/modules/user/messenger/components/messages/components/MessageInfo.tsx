import SvgHelper from "@/common/svg-helper/SvgHelper";
import { MessageInfoWrapper, MessageTime } from "@/modules/user/messenger/components/messages/style";

interface MessageInfoProps {
    time: string;
    isEdited?: boolean;
};

const MessageInfo = ({time, isEdited} : MessageInfoProps) => {
    return (
        <MessageInfoWrapper>
            <MessageTime>
                {isEdited ? 'изм. ' : ''}
                {time}
            </MessageTime>
            <SvgHelper iconName="sent" width="15" height="15" />
        </MessageInfoWrapper>
    )
};

export default MessageInfo;