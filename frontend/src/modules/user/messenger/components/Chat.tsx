import { colors, device } from "@/common/styles/styleConstants";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import image5 from "@/modules/user/messenger/components/image5.png"
import NavigateInfoChat from "@/modules/user/messenger/components/NavigateInfoChat";
import RenderMessages from "@/modules/user/messenger/components/render/RenderMessages";
import CreaterMessage from "@/modules/user/messenger/components/CreaterMessage";
import { useAppSelector } from "@/common/hooks/useAppSelector";

const ChatWrapper = styled('div')`
    width: inherit;

    @media ${device.mobile}{
        width: 550px;
    }
`

const HiddenBlock = styled('div')`
    position: fixed;
    height: 60px;
    width: inherit;
    background-color: ${colors.whiteBackground};
    z-index: 4;
`

const TopHidden = styled(HiddenBlock)`
    top: 50px;
`

const BottomHidden = styled(HiddenBlock)`
    height: 110px;
    bottom: 0px;
`

const BackGroundImage = styled('img')`
    position: fixed;
    width: inherit;
    height: 90%;
    top: 110px;
    object-fit: cover;
`

const Chat = () => {
    const { id } = useParams();

    if(!id){
        return null;
    }

    const storeChats = useAppSelector((state) => state.newChatReducer);
    const currentChat = storeChats.chats[id];

    const scrollBottom = async () => {
        await setTimeout(() => {
            window.scrollTo({
                top: document.documentElement.scrollHeight, 
                behavior: 'smooth', 
            });
        }, 100)
    };

    useEffect(() => {
        scrollBottom();
    }, [currentChat.messages]);

    return (
        <ChatWrapper>
            <TopHidden />

            <NavigateInfoChat id={id}/>
            <BackGroundImage src={currentChat.theme ? currentChat.theme : image5} />
            <RenderMessages id={id}/>
            <CreaterMessage id={id}/>

            <BottomHidden />
        </ChatWrapper>
    );
};

export default Chat;
