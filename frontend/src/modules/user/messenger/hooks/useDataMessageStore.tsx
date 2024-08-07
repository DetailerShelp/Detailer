import { useAppSelector } from "@/common/hooks/useAppSelector";

interface useDataMessageStoreProps {
    chatId: number | string;
    mesId?: number | string;
}

const useDataMessageStore = ({ chatId, mesId }: useDataMessageStoreProps) => {
    const storeChats = useAppSelector((state) => state.newChatReducer);
    const currentChat = storeChats.chats[chatId];

    return {
        currentChat: currentChat,
        messages: currentChat.messages,
        forwardMes: storeChats.forwardMes,
        nameChat: currentChat.participants.length > 2 ? currentChat.nameGroup : currentChat.participants[1],
        currentMessage: currentChat.messages.find(message => message.id === mesId),
        pinnedMessage: currentChat.pinnedMessage,
        isForward: currentChat.answeredMessages || storeChats.forwardMes,
        theme: currentChat.theme,
        editedMessage: currentChat.messages.find(mes => mes.id === currentChat.editedMessageId),
        editedMessageId: currentChat.editedMessageId,
    }
};

export default useDataMessageStore;