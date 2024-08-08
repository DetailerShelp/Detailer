import { clampText, flexCenter, resetButton } from "@/common/styles/mixins"
import { borders, colors, device, fonts } from "@/common/styles/styleConstants"
import styled from "styled-components"

export const ForwardsMessageWrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 25px;
    width: inherit;
    height: 60px;
    position: fixed;
    bottom: 110px;
    background-color: ${colors.whiteTotal};
    z-index: 5;
    border-bottom: ${borders.defaultBorder};

    animation: showsDown 0.5s;

    @keyframes showsDown {
        from {
            transform: translateY(50px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @media ${device.mobile} {
        bottom: 160px;
    }
`

export const PinMessageWrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 25px;
    width: inherit;
    height: 60px;
    position: fixed;
    top: 180px;
    background-color: ${colors.whiteTotal};
    border-top: ${borders.defaultBorder};
    z-index: 5;

    animation: showsTop 0.5s;

    @keyframes showsTop {
        from {
            transform: translateY(-50px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    
    @media ${device.mobile} {
        top: 230px;
    }
`

export const InfoBoxWrapper = styled('div')`
    max-width: 70%;
    border-left: ${borders.forwardMesBorder} ;
    padding-left: 10px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const TitleMessage = styled('span')`
    color: ${colors.blue};
`

export const CloseButtonStyled = styled('button')`
    ${resetButton}
    ${flexCenter}
`

export const ReplaceMediaWrapper = styled('button')`
    ${resetButton}
    display: flex;
    gap: 15px;
    
    &:hover {
        opacity: 0.7;
    }
`

export const ReplaceText = styled('h3')`
    font-weight: ${fonts.weights.medium};
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
`