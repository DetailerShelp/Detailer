import { useActions } from "@/store/actions";
import { useAppSelector } from "@/common/hooks/useAppselector";
import EditMessage from "@/modules/user/messenger/components/extraInfo/components/EditMessage";
import InfoBox from "@/modules/user/messenger/components/extraInfo/components/InfoBox";
import { ForwardsMessageWrapper } from "@/modules/user/messenger/components/extraInfo/style";
import CloseButton from "@/modules/user/messenger/components/extraInfo/components/CloseButton";

interface ForwardsMessageProps {
    idChat: number | string;
};

const BottomSheet = ({ idChat }: ForwardsMessageProps) => {
    const storeChats = useAppSelector((state) => state.newChatReducer);
    const currentChat = storeChats.chats[idChat];
    const editMessageId = currentChat.editedMessageId;
    const editMessage = currentChat.messages.find(mes => mes.id === editMessageId);

    const getForwardMessage = () => {
        if (storeChats.forwardMes) {
            return storeChats.chats[storeChats.forwardMes.chatId].messages.find(message => message.id === storeChats.forwardMes?.mesId);
        } else {
            return currentChat.messages.find(message => message.id === currentChat.answeredMessages);
        }
    };
    const forwardMes = getForwardMessage();

    if (!forwardMes && !editMessageId) {
        return null;
    };

    const {
        deleteForwardMessage,
        setMediaMessage,
        setEditedMessage,
    } = useActions();

    const handleDeleteForwards = () => {
        deleteForwardMessage({ chatId: idChat })
    };

    const handleNewMedia = (file: File) => {
        setMediaMessage({ chatId: idChat, mesId: editMessageId!, media: file });
    };

    const handleCancelEdit = () => {
        setEditedMessage({ chatId: idChat, mesId: undefined });
    };

    return (
        <ForwardsMessageWrapper>
            {forwardMes ?
                <>
                    <InfoBox title={forwardMes?.author} message={forwardMes?.text} />
                    <CloseButton onClose={handleDeleteForwards}/>
                </>
                :
                <>
                    <EditMessage editMessage={editMessage} handleNewMedia={handleNewMedia} />
                    <CloseButton onClose={handleCancelEdit}/>
                </>}
        </ForwardsMessageWrapper>
    )
};

export default BottomSheet;
