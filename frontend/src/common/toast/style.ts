import styled from "styled-components";
import { borders, colors, device, fonts, shadows } from "@/common/styles/styleConstants";
import { clampText } from "@/common/styles/mixins";

export const ToastsWrapper = styled('div')`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 100000;
`

export const ToastStyled = styled('div') <{ $isRemove: boolean }>`
    display: grid;
    grid-template-columns: 1fr 7fr 1fr;
    margin-bottom: 20px;
    padding: 15px;
    width: 450px;
    height: 90px;
    overflow: hidden;
    background-color: ${colors.whiteBackground};
    box-shadow: ${shadows.defaultShadow};
    border-radius: ${borders.mediaBorderRadius};
    animation: ${props => props.$isRemove ? 'removeToast .2s' : 'showToast .4s'} ;
    opacity: ${props => props.$isRemove ? 0 : 1};
    transition: .3s;

    @keyframes showToast {
        0% {
            transform: translateX(100px);
        }
        35% {
            transform: translateX(-15px);
        }
        65% {
            transform: translateX(10px);
        }
        100% {
            transform: translateX(0px);
        }
    }

    @keyframes removeToast {
        from {
            transform: translateY(0px);
            opacity: 1;
        }
        to {
            transform: translateY(100px);
            opacity: 0;
        }
    }

    @media ${device.tablet} {
        width: 350px;
        height: 80px;
    }
`

export const ToastContent = styled('div')`

`

export const ToastHeader = styled('h4')`
    font-weight: ${fonts.weights.medium};
    ${clampText(fonts.sizes.small, fonts.sizes.main)}
`

export const ToastMessage = styled('span')`
    ${clampText(fonts.sizes.smallMobile, fonts.sizes.mainMobile)}
`

export const ButtonWrapper = styled('div')`
    justify-self: end;
`