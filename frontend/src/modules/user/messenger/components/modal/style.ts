import { clampText } from "@/common/styles/mixins"
import { device, fonts } from "@/common/styles/styleConstants"
import styled from "styled-components"

export const ModalMediaWrapper = styled('div')`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 500px;
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

export const ModalWrapper = styled('div')`
    margin-block: 20px;
    max-width: 500px;
`

export const HeaderText = styled('h2')`
    ${clampText(fonts.sizes.titleMobile, fonts.sizes.titleModal)};
    font-weight: ${fonts.weights.semiBold};
    margin-left: 20px;
`