import { Button } from "@/common/components/ui/Button";
import { borders, colors, fonts } from "@/common/styles/styleConstants";
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
    font-weight: ${fonts.weights.medium};
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
