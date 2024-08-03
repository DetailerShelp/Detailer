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
    margin-block: 10px;
    margin-inline: 20px auto;
    padding-bottom: 5px;

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
    margin-block: 10px;
    margin-inline: auto 20px;
    padding-bottom: 5px;
    transition: ${transitions.fastTransition};

    background-color: ${props => props.isFocus && colors.myMesActive};
`


export const MessageContentWrapper = styled('div')`
    
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
    word-wrap: break-word;
`

export const AnswerdMessageWrapper = styled('div')`
    min-width: 200px;
    width: fit-content;
    padding-left: 10px;
    margin: 0px 10px 5px 10px;

    border-left: 2px solid white;

    &:hover {
        cursor: pointer;
    }
`