import { clampHeight, clampText, square } from "@/common/styles/mixins"
import { device, fonts } from "@/common/styles/styleConstants"
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
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;
    justify-content:center;
    overflow: hidden;

    @media ${device.desktop} {
        grid-template-columns: repeat(4, 1fr);
    }

    @media ${device.mobile}{
        grid-template-columns: repeat(5, 1fr);
        gap: 3px;
    }
`

export const DescriptionTextArea = styled('div')`
    ${clampHeight(130, 215)}
`

export const MediaBlockWrapper = styled('div')`
    ${square(100)}

    @media ${device.desktop}{
        ${square(85)}
    }

    @media ${device.tablet}{
        ${square(70)}
    }

    @media ${device.mobile}{
        ${square(60)}
    }
`