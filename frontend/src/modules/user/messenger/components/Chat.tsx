import { borders, colors, device } from "@/common/styles/styleConstants";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { ChatAvatar } from "@/modules/user/messenger/components/style";
import defaultAvatar from "@/common/images/avatar.png";
import { useEffect, useState } from "react";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { flexCenter } from "@/common/styles/mixins";
import TextArea from "@/common/components/ui/TextArea";
import image5 from "@/modules/user/messenger/components/image5.png"
import Message from "@/modules/user/messenger/components/messages/Message";
import MyMessage from "@/modules/user/messenger/components/messages/MyMessage";
import ChatDropdownMenu from "@/modules/user/messenger/components/DropMenu/BurgerDropdownMenu";
import { useAppSelector } from "@/common/hooks/useAppselector";
import { useActions } from "@/store/actions";
import DragAndDropUpload from "@/common/components/DraggerUploadFile";
import Modal from "@/common/components/ui/Modal";
import ModalMedia from "./modal/ModalMedia";

const ChatWrapper = styled('div')`
    width: inherit;

    @media ${device.mobile}{
        width: 550px;
    }
`

const ChatMessageWrapper = styled('div')`
    position: relative;
    width: inherit;
    background-color: inherit;
    padding-block: 100px 120px;
`;

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

const NavInfoChat = styled('div')`
    display: grid;
    grid-template-columns: 35px auto 80px;
    align-items: center;
    gap: 20px;
    position: fixed;
    width: inherit;
    height: 90px;
    padding-inline: 25px;
    border-top-left-radius: ${borders.defaultBorderRadius};
    border-top-right-radius: ${borders.defaultBorderRadius};
    background-color: ${colors.whiteTotal};
    z-index: 5;
`

const MessageWrapper = styled('div')`
    display: flex;
    align-items: center;
    padding-inline: 25px;
    gap: 15px;
    position: fixed;
    width: inherit;
    height: 90px;
    bottom: 20px;
    border-bottom-left-radius: ${borders.defaultBorderRadius};
    border-bottom-right-radius: ${borders.defaultBorderRadius};
    background-color: ${colors.whiteTotal};
    z-index: 5;

    @media ${device.mobile}{
        bottom: 70px;
    }
`
const BackGroundImage = styled('img')`
    position: fixed;
    width: inherit;
    height: 95vh;
    top: 110px;
    object-fit: cover;
`

const InfoChat = styled('div')`
    display: flex;
    align-items: center;
    gap: 15px;
`
const TitleChat = styled('h3')`
    
`

const NavChatTool = styled('div')`
    display: flex;
    gap: 15px;
`

const MessageToolWrapper = styled('div')`
    height: 50px;
    aspect-ratio: 1;
    ${flexCenter}
    border-radius: ${borders.circleBorderRadius};

    &:hover{
        cursor: pointer;
        background-color: ${colors.grayBorder};
    }
`

const MessageTool = styled(SvgHelper)`
    width: 35px;
    height: 35px;
`

const MessageTextWrapper = styled('div')`
    width: 100%;
    height: 60px;
`

const Chat = () => {
    const { id } = useParams();
    const [isMute, setIsMute] = useState(true);
    const [dropDownOpen, setDropdownOpen] = useState(false);
    const [text, setText] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [media, setMedia] = useState<File>();

    const storeChats = useAppSelector((state) => state.newChatReducer);
    const currentChat = storeChats[id!];
    const { addNewMessage, addNewMessageMedia } = useActions();

    const scrollBottom = async () => {
        await setTimeout(() => {
            window.scrollTo({
                top: document.documentElement.scrollHeight, // Прокрутка до конца страницы
                behavior: 'smooth', // Плавная прокрутка
            });
        }, 100)
    };

    const handleNewMes = () => {
        if (text.trim()) {
            addNewMessage({ text: text, chatId: id! });
            setText('');
        }
    };

    const handleAddFile = (file: File) => {
        setMedia(file);
        setModalOpen(true);
    };

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Возвращает на предыдущую страницу
    };

    useEffect(() => {
        scrollBottom();
        console.log('112');
    }, [storeChats[id!].messages]);

    return (
        <ChatWrapper>
            <ModalMedia
                chatId={id!}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                media={media!}
            />

            <TopHidden />

            <BackGroundImage src={image5} />

            <NavInfoChat>
                <ButtonWithIcon icon="arrowLeft" size={40} click={handleBack} />

                <InfoChat>
                    <ChatAvatar src={defaultAvatar} />
                    <TitleChat>Nagibator228</TitleChat>
                    {isMute && <SvgHelper iconName="mute" color="#B8B8B8" />}
                </InfoChat>

                <NavChatTool>
                    <ButtonWithIcon icon="search" size={40} />
                    <div
                        style={{ position: 'relative' }}
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <ButtonWithIcon icon="burger" size={40} />
                        {dropDownOpen && <ChatDropdownMenu />}
                    </div>
                </NavChatTool>
            </NavInfoChat>

            <ChatMessageWrapper>
                <button onClick={scrollBottom}>sdcsd</button>
                {currentChat.messages.map((mes, index) => (
                    mes.author === 'Ilia'
                        ? <MyMessage
                            key={index}
                            text={mes.text}
                            time={mes.createdAt}
                            media={mes.media}
                        />
                        : <Message
                            key={index}
                            text={mes.text}
                            time={mes.createdAt}
                            media={mes.media}
                        />
                ))}
            </ChatMessageWrapper>

            <MessageWrapper>
                <DragAndDropUpload onFile={handleAddFile} multiple={false}>
                    <MessageToolWrapper>
                        <MessageTool iconName="clip" />
                    </MessageToolWrapper>
                </DragAndDropUpload>

                <MessageTextWrapper>
                    <TextArea
                        value={text}
                        setText={setText}
                        textAreaPlaceholder="Сообщение"
                        wrapperStyle={{ padding: '7px 10px', height: '100%' }}
                        style={{ height: '110%' }}
                    />
                </MessageTextWrapper>

                <MessageToolWrapper>
                    <MessageTool iconName="emoticon" />
                </MessageToolWrapper>

                <MessageToolWrapper onClick={handleNewMes}>
                    <MessageTool iconName="sender" />
                </MessageToolWrapper>
            </MessageWrapper>

            <BottomHidden />
        </ChatWrapper>
    );
};

export default Chat;
