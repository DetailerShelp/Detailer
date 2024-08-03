import { Button } from "@/common/components/ui/Button"
import { clampHeight, clampWidth } from "@/common/styles/mixins"
import { borders, colors, device } from "@/common/styles/styleConstants"
import styled from "styled-components"

export const ModalMediaWrapper = styled('div')`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 800px;
    padding: 20px;
    gap: 10px;

    @media ${device.desktop} {
        max-width: 600px;
    }

    @media ${device.tablet} {
        max-width: 400px;
    }
`

export const ButtonsWrapper = styled('div')`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
`

export const ButtonPostOk = styled(Button)`
    ${clampWidth(100, 200)}
    ${clampHeight(25, 40)}
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