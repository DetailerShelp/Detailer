import { clampHeight, clampText, clampWidth, flexCenter } from "@/common/styles/mixins";
import { borders, colors, fonts } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const ShortsWrapper = styled('div')`
    ${clampHeight(290, 550)}
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const VideoWrapper = styled('div')`
`

export const VideoPosition = styled('div')`
    ${clampHeight(250, 490)}
    ${clampWidth(180, 240)}
    ${flexCenter}
`

export const VideoUploaded = styled(VideoPosition)`
    background-color: ${colors.blackTotal};    
    border: ${borders.borderGrayAccent};
    border-radius: ${borders.defaultBorderRadius};
`

export const DescriptionBlock = styled('h2')`
    padding: 0px;
    margin: 0px 10px 15px;
    font-weight: ${fonts.weights.medium};
    ${clampText(fonts.sizes.subTitleMobile, fonts.sizes.subTitle)};
`

export const DiscriptionWrapper = styled('div')`
    ${clampWidth(200, 270)}
`

export const DiscriptionTextArea = styled('div')`
    ${clampHeight(100, 490)}
`