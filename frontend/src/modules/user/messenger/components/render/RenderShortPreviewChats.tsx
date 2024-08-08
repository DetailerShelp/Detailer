import { useAppSelector } from "@/common/hooks/useAppSelector"
import { BlackWhiteButton } from "@/common/styles/tags/button/BlackWhiteButton"
import { useActions } from "@/store/actions"
import { 
    FooterWrapper, 
    TextInfoWrapper, 
    ChatAvatar,
    ShortChatsWrapper,
    ShortPreviewChat,
} from "@/modules/user/messenger/components/render/style"

interface RenderShortPreviewChatsProps {
    onClick: () => void;
};

const RenderShortPreviewChats = ({ onClick }: RenderShortPreviewChatsProps) => {
    const storeChats = useAppSelector((state) => state.newChatReducer);
    const allChats = storeChats.chats;
    const { deleteForwardMessage } = useActions();

    const handleClose = () => {
        onClick();
        deleteForwardMessage({});
    };

    return (
        <ShortChatsWrapper>
            {Object.keys(allChats).map(key => {
                const chat = allChats[key];
                return (
                    <ShortPreviewChat to={`/messenger/chat/${key}`} onClick={onClick}>
                        <ChatAvatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvLDufK1c995wXvLsyn_LMIreLZSxOTy7Rg&s" />
                        <TextInfoWrapper>
                            <h3>{chat.nameGroup ? chat.nameGroup : chat.participants[1]}</h3>
                            <p>{chat.participants.length > 2 ? 'Группа' : 'Чат'}</p>
                        </TextInfoWrapper>
                    </ShortPreviewChat>
                );
            })}

            <FooterWrapper>
                <BlackWhiteButton color="white" title="Отмена" size={30} click={handleClose}/>
            </FooterWrapper>
        </ShortChatsWrapper>
    )
};

export default RenderShortPreviewChats;