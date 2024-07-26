import { flexCenter, square } from "@/common/styles/mixins";
import { borders, colors, device, shadows, transitions } from "@/common/styles/styleConstants";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const PreviewChatsWrapper = styled('div')`
    width: 100%;
    background-color: ${colors.whiteTotal};
    border: ${borders.defaultBorder};
    border-radius: ${borders.defaultBorderRadius};
    box-shadow: ${shadows.defaultShadow};

    /* @media ${device.tablet}{
        width: 80vw;  
    }

    @media ${device.mobileL}{
        width: 90vw;
    } */
`

export const ChatToolWrapper = styled('div')`
    ${flexCenter}
    gap: 20px;
    margin-block: 15px;
`

export const AdderChat = styled('div')`
    ${flexCenter}
`

export const ChatsWrapper = styled('div')`
    display: flex;
    flex-direction: column;
`

export const PreviewChat = styled(NavLink)`
    display: grid;
    grid-template-columns: 60px auto 60px;
    align-items: center;
    height: 90px;
    padding: 15px 25px;
    gap: 15px;
    transition: ${transitions.mediumTransition};

    &:hover{
        background-color: ${colors.grayBorder};
    }

    &:last-child{
        border-bottom-left-radius: ${borders.defaultBorderRadius};
        border-bottom-right-radius: ${borders.defaultBorderRadius};
    }
`

export const ChatAvatar = styled('img')`
    ${square(60)}
    border-radius: ${borders.circleBorderRadius};
`

export const TextInfoWrapper = styled('div')`
    justify-self: start;
`

export const MessageInfoWrapper = styled('div')`

`