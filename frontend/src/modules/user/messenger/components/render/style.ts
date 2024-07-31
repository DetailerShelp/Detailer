import { clampText, flexCenter, square } from "@/common/styles/mixins";
import { borders, colors, fonts } from "@/common/styles/styleConstants";
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