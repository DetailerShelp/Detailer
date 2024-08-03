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
    }
};

export default useDataMessageStore;