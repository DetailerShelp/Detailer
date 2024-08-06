import { borders, colors } from "@/common/styles/styleConstants";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import styled from "styled-components";
import ChatDropdownMenu from "@/modules/user/messenger/components/dropMenu/BurgerDropdownMenu";
import { ChatAvatar } from "@/modules/user/messenger/components/style";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import defaultAvatar from "@/common/images/avatar.png";
import PinMessage from "@/modules/user/messenger/components/PinMessage";
import useDataMessageStore from "@/modules/user/messenger/hooks/useDataMessageStore";

interface NavigateInfoChatProps {
    id: number | string;
};

const NavInfoChat = styled('div')`
    display: grid;
    grid-template-columns: 35px auto 90px;
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

const NavChatTool = styled('div')`
    display: flex;
    gap: 15px;
`

const InfoChat = styled('div')`
    display: flex;
    align-items: center;
    gap: 15px;
`

const TitleChat = styled('h3')`
`

const NavigateInfoChat = ({ id }: NavigateInfoChatProps) => {
    const [dropDownOpen, setDropdownOpen] = useState(false);
    const { currentChat, nameChat } = useDataMessageStore({ chatId: id });

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/messenger');
    };

    return (
        <NavInfoChat>
            <ButtonWithIcon icon="arrowLeft" size={40} click={handleBack} />

            <InfoChat>
                <ChatAvatar src={defaultAvatar} />
                <TitleChat>{nameChat}</TitleChat>
                {!currentChat.notification && <SvgHelper iconName="mute" color="#B8B8B8" />}
            </InfoChat>

            <NavChatTool>
                <div>
                    <ButtonWithIcon icon="search" size={40} />
                </div>
                <div
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                >
                    <ButtonWithIcon icon="burger" size={40} />
                    {dropDownOpen && <ChatDropdownMenu chatId={id} />}
                </div>
            </NavChatTool>
            <PinMessage idChat={id} />
        </NavInfoChat>
    )
};

export default NavigateInfoChat;