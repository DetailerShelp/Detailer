import { DefaultButton } from "@/common/components/ui/Button"
import { clampHeight, flexCenter, resetButton, square } from "@/common/styles/mixins"
import { colors, transitions } from "@/common/styles/styleConstants"
import styled from "styled-components"

export const TabsWrapper = styled('div')`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
`

export const TabButton = styled(DefaultButton) <{ isActive: boolean }>`
    ${flexCenter};
    ${clampHeight(25, 50)}
    gap: 10px;
    box-sizing: border-box;
    color: ${props => props.isActive ? colors.blackTotal : colors.grayText};
    text-align: center;
    border-bottom: ${props => props.isActive ? `2px solid ${colors.blackTotal}` : `2px solid ${colors.grayText}`};
`

export const LoaderWrapper = styled('button')`
    ${flexCenter}
    ${resetButton}
    ${square(100)}
    border-radius: 10px;
    background-color: ${colors.grayBorder};
    transition: ${transitions.mediumTransition};

    &:hover{
        opacity: 0.7;
    }
`