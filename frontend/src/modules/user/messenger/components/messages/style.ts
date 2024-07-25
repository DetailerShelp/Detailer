import { clampText } from "@/common/styles/mixins"
import { borders, colors, fonts, transitions } from "@/common/styles/styleConstants"
import styled from "styled-components"


export const MessageWrapper = styled('div')`
    position: relative;
    max-width: 300px;
    width: fit-content;
    word-wrap: break-word;
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
    color: ${colors.blackTotal};
    background-color: ${colors.messageDefault};
    border-radius: ${borders.defaultBorderRadius};
    border-bottom-left-radius: 0px;
    padding: 10px 15px;
    margin-block: 10px;
    margin-inline: 20px auto;
`

export const MyMessageWrapper = styled('div') <{ isFocus: boolean }>`
    position: relative;
    max-width: 300px;
    width: fit-content;
    word-wrap: break-word;
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
    color: ${colors.whiteTotal};
    background-color: ${colors.myMesDefault};
    border-radius: ${borders.defaultBorderRadius};
    border-bottom-right-radius: 0px;
    padding: 10px 15px;
    margin-block: 10px;
    margin-inline: auto 20px;
    transition: ${transitions.fastTransition};

    background-color: ${props => props.isFocus && colors.myMesActive};
`


export const MessageContent = styled('div')`
    
`

export const MessageInfo = styled('div')`
    display: flex;
    align-items: start;
    gap: 5px;
    width: fit-content;
    margin-inline: auto 0;
`

export const MessageTime = styled('span')`
    font-size: ${fonts.sizes.extraSmall}px;
    color: ${colors.grayText};
`