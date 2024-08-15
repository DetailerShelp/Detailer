import { clampText, flexCenter, hoverActive, square } from "@/common/styles/mixins";
import { borders, colors, fonts, transitions } from "@/common/styles/styleConstants";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderMedia = styled('h2')`
    ${clampText(fonts.sizes.titleMobile, fonts.sizes.titleModal)};
    font-weight: ${fonts.weights.semiBold};
`

export const UploadImage = styled('img')`
    width: 100%;
    height: 100%;
    border-radius: ${borders.defaultBorderRadius};
`

export const UploadVideo = styled('video')`
    width: 100%;
    height: 100%;
    border-radius: ${borders.defaultBorderRadius};
`

export const FileWrapper = styled('div')`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 200px;
`

export const FileInfo = styled('div')`
    display: flex;
    flex-direction: column;
`

export const TextWrapper = styled('div')`
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
`

export const TextWrapperSize = styled('div')`
    font-size: ${fonts.sizes.dropdown}px;
    color: ${colors.grayBackground};
`

export const FileIcon = styled('a')`
    ${flexCenter}
    ${square(50)}
    border-radius: ${borders.circleBorderRadius};
    background-color: ${colors.grayBorder};

    &:hover {
        background-color: ${colors.grayBackground};
    }
`

export const FooterWrapper = styled('div')`
    margin-top: 20px;
    margin-inline: auto 20px;
`

export const ChatAvatar = styled('img')`
    ${square(60)}
    border-radius: ${borders.circleBorderRadius};
`

export const TextInfoWrapper = styled('div')`
    justify-self: start;
    width: 100%;
    overflow: hidden;
`

export const MessageText = styled('p')`
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const ShortPreviewChat = styled(NavLink)`
    display: grid;
    grid-template-columns: 60px auto 60px;
    align-items: center;
    height: 90px;
    padding: 15px 25px;
    gap: 15px;
    transition: ${transitions.mediumTransition};
    border-bottom: ${borders.defaultBorder};
    ${hoverActive}
`

export const PreviewChat = styled(ShortPreviewChat)`
    &:first-child{
        border-top-left-radius: ${borders.defaultBorderRadius};
        border-top-right-radius: ${borders.defaultBorderRadius};
    }

    &:last-child{
        border-bottom-left-radius: ${borders.defaultBorderRadius};
        border-bottom-right-radius: ${borders.defaultBorderRadius};
    }
`

export const ChatsWrapper = styled('div')`
    display: flex;
    flex-direction: column;
`

export const ShortChatsWrapper = styled(ChatsWrapper)`
    max-height: 80vh;
    min-width: 450px;
    overflow-y: auto;
`