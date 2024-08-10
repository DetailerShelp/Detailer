import { clampText } from "@/common/styles/mixins"
import { borders, colors, fonts, transitions } from "@/common/styles/styleConstants"
import styled from "styled-components"

export const CommonMessageStyle = styled('div') <{ $isFlex: boolean }>`
    display: ${props => props.$isFlex ? 'flex' : 'block'};
    align-items: end;
    max-width: 300px;
    width: fit-content;
    word-wrap: break-word;
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
    border-radius: ${borders.defaultBorderRadius};
    margin-block: 10px;
    padding-bottom: 5px;
    transition: ${transitions.fastTransition};
`

export const MessageWrapper = styled(CommonMessageStyle) <{ $isFocus: boolean }>`
    position: relative;
    color: ${colors.black};
    border-bottom-left-radius: 0px;
    margin-inline: 20px auto;
    background-color: ${props => props.$isFocus ? colors.whiteActive : colors.messageDefault};
`

export const MyMessageWrapper = styled(CommonMessageStyle) <{ $isFocus: boolean }>`
    color: ${colors.white};
    background-color: ${colors.myMesDefault};
    border-bottom-right-radius: 0px;
    margin-inline: auto 20px;
    background-color: ${props => props.$isFocus && colors.myMesActive};
`


export const MessageContentWrapper = styled('div')<{$withMedia: boolean}>`
    ${props => props.$withMedia && 'min-width: 150px'}
`

export const MessageInfoWrapper = styled('div')`
    display: flex;
    align-items: start;
    gap: 5px;
    width: fit-content;
    margin-inline: auto 10px;
`

export const MessageTime = styled('span')`
    font-size: ${fonts.sizes.extraSmall}px;
    color: ${colors.grayText};
`

export const MessageText = styled('span')`
    width: 100%;
    display: inline-block;
    padding: 3px 15px 0px;
    box-sizing: border-box;
`

export const AnswerdMessageWrapper = styled('div')`
    min-width: 200px;
    max-width: inherit;
    overflow: hidden;

    &:hover {
        cursor: pointer;
    }
`

export const AnswerdMessageText = styled('div') <{ $isMine: boolean }>`
    min-width: 200px;
    max-width: inherit;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-inline: 10px;
    margin: 10px 10px 0px 15px;
    border-left: 2px solid ${props => props.$isMine ? colors.white : colors.myMesDefault};
    background-color: ${props => props.$isMine ? colors.forwardMyMes : colors.forwardMes};
    border-top-right-radius: ${borders.mediaBorderRadius};
    border-bottom-right-radius: ${borders.mediaBorderRadius};
`