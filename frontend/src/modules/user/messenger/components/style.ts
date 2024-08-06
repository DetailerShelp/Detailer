import { flexCenter, square } from "@/common/styles/mixins";
import { borders, colors, device, shadows } from "@/common/styles/styleConstants";
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

export const ChatAvatar = styled('img')`
    ${square(60)}
    border-radius: ${borders.circleBorderRadius};
`