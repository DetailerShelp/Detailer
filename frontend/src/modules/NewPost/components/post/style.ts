import { clampHeight, clampText } from "@/common/styles/mixins"
import { fonts } from "@/common/styles/styleConstants"
import styled from "styled-components"

export const DescriptionBlock = styled('h2')`
    padding: 0px;
    margin: 0px 10px 15px;
    font-weight: ${fonts.weights.medium};
    ${clampText(fonts.sizes.subTitleMobile, fonts.sizes.subTitle)};
`

export const PostContent = styled('div')`
    width: 100%;
`

export const PostMediaContent = styled('div')`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`

export const DescriptionTextArea = styled('div')`
    ${clampHeight(50, 215)}
`