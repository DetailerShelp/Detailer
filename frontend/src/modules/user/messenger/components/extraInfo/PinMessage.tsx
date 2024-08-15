import { useActions } from "@/store/actions";
import useDataMessageStore from "@/modules/user/messenger/hooks/useDataMessageStore";
import InfoBox from "@/modules/user/messenger/components/extraInfo/components/InfoBox";
import CloseButton from "@/modules/user/messenger/components/extraInfo/components/CloseButton";
import { PinMessageWrapper } from "@/modules/user/messenger/components/extraInfo/style";

interface ForwardsMessageProps {
    idChat: number | string;
};

const PinMessage = ({ idChat }: ForwardsMessageProps) => {
    const {currentChat, messages} = useDataMessageStore({chatId: idChat});
    const forwardMes = messages.find(message => message.id === currentChat.pinnedMessage);

    if (!forwardMes || !currentChat.pinnedMessage) {
        return null;
    };

    const { pinMessage } = useActions();

    const handleDelete = () => {
        pinMessage({ chatId: idChat, mesId: undefined })
    };

    return (
        <PinMessageWrapper>
            <InfoBox title="Закрепленное сообщение" message={forwardMes.text}/>
            <CloseButton onClose={handleDelete}/>
        </PinMessageWrapper>
    )
};

export default PinMessage;