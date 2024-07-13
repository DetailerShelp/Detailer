import { Button } from "@/common/components/ui/Button";
import { flexCenter } from "@/common/styles/mixins";
import { borders, colors, fonts, transitions } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const ModalPostWrapper = styled('div')`
    width: 700px;
    max-height: 800px;
    padding: 35px 76px;
    overflow-y: hidden;
`

//Возможно переместить overflow

export const ModalPostContent = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 25px;
    overflow-x: hidden;
`

export const ModalPostHeader = styled('h1')`
    text-align: center;
    font-size: 25px;
    font-weight: 500;
`

export const DescriptionBlock = styled('h2')`
padding: 0px;
    margin: 0px 10px 15px;
    font-size: 20px;
    font-weight: 500;
`

export const PostContent = styled('div')`
    width: 100%;
`

export const PostMediaContent = styled('div')`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`

export const ButtonsWrapper = styled('div')`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
`

export const ButtonPostOk = styled(Button)`
    width: 240px;
    height: 40px;
    font-size: ${fonts.sizes.small};
`

export const ButtonPostCancel = styled(ButtonPostOk)`
    border: ${borders.borderBlack};
    color: ${colors.blackTotal};
    background-color: ${colors.whiteTotal};

&:hover {
    background-color: ${colors.blackTotal};
    color: ${colors.whiteTotal};
}
`

export const LoaderWrapper = styled('div')`
    ${flexCenter}
    width: 100px;
    height: 100px;
    border-radius: 10px;
    background-color: ${colors.grayBorder};
    transition: ${transitions.mediumTransition};

    &:hover{
        opacity: 0.7;
        cursor: pointer;
    }
`