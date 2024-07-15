import { clampText, flexCenter } from "@/common/styles/mixins";
import { fonts } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const ShortsWrapper = styled('div')`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const VideoWrapper = styled('div')`
    
`

export const VideoPosition = styled('div')`
    height: 490px;
    width: 240px;
    ${flexCenter}
`

export const DescriptionBlock = styled('h2')`
    padding: 0px;
    margin: 0px 10px 15px;
    font-weight: ${fonts.weights.medium};
    ${clampText(fonts.sizes.subTitleMobile, fonts.sizes.subTitle)};
`

export const DiscriptionWrapper = styled('div')`
    width: 270px;
    height: 490px;
`