import { WidgetHeaderWrapper, WidgetTitle, WidgetWrapper } from "@/common/components/widgets/WidgetsWrapper";
import { absCenter, absVertically, clampText, square } from "@/common/styles/mixins";
import { borders, colors, device, fonts, shadows } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const WidgetShortComments = styled(WidgetWrapper)`
height: 100%;
overflow-y: scroll;

&::-webkit-scrollbar {
    width: 0;
}
`;

export const HeaderShortComments = styled(WidgetHeaderWrapper)``;

export const TitleShortComments = styled(WidgetTitle)`
margin-left: 10px;
`;

export const ShortsWrapper = styled('div')`
display: flex;
height: 850px;
gap: 35px;

@media ${device.mobile} {
    height: 800px;
}

@media ${device.mobileL} {
    height: 650px;
}

@media ${device.mobileL} {
    height: 500px;
}
`;

export const ShortsVideosWrapper = styled('div')`
width: 430px;
height: inherit;
overflow-y: scroll;
position: relative;
border: ${borders.borderGrayAccent};
border-radius: ${borders.defaultBorderRadius};

&::-webkit-scrollbar { width: 0; }
`;

export const ShortVideoWrapper = styled('div')`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: inherit;
// Временно добавлено
background: linear-gradient(90deg, #f179fe,#e17efc,#ca82ff,#c086fe,#b686fe);
`;
export const ShortVideo = styled('div')``;

export const ShortVideoPlayer = styled('video')`
position: relative;
width: 100%;
height: inherit;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 60px;
margin-bottom: 10px;
background-color: ${colors.blackTotal};
`;

export const ShortsSidePanelWrapper = styled('div')`
display: flex;
flex-direction: column;
justify-content: space-between;
`;

export const ShortsFunctionsWrapper = styled('div')`
display: flex;
flex-direction: column;
gap: 25px;
`;


export const ShortsInfoWrapper = styled('div')`
width: 100%;
height: auto;
max-width: 324px;
padding: 15px 25px;
background-color: ${colors.whiteTotal};
border: ${borders.defaultBorder};
border-radius: ${borders.defaultBorderRadius};
box-shadow: ${shadows.defaultShadow};
`;

export const ShortsInfoProfile = styled('div')`
display: flex;
gap: 15px;
margin-bottom: 15px;
`;

export const ShortsInfoAvatar = styled('img')`
${square(50)}
`;

export const ShortsInfoAuthor = styled('p')`
font-size: ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)};
font-weight: ${fonts.weights.medium};
`;

export const ShortsInfoDescription = styled('p')`
margin-bottom: 15px;
font-size: ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)};
font-weight: ${fonts.weights.regular};
`;

export const ShortVideoRangeWrapper = styled('div')`
position: absolute;
width: calc(100% - 20px);
left: 50%;
transform: translateX(-50%);
bottom: 30px;
`;

export const ShortVideoRangeInput = styled('input')`
-webkit-appearance: none;
-moz-appearance: none;
width: 100%;
height: 4px;
${absCenter}
padding: 0;
outline: none;
background: ${colors.blackTransparent};

&::-webkit-slider-thumb {
    -webkit-appearance: none;
    ${square(0)}
    margin: auto 0;
    background: ${colors.whiteTotal};
    border-radius: ${borders.circleBorderRadius};
}
`;

export const ShortVideoRangeProgress = styled('div')`
${absVertically}
pointer-events: none;
height: 4px;
background-color: ${colors.whiteTotal};
`;

export const ShortVideoRangeCircle = styled('div')`
${square(10)}
${absVertically}
pointer-events: none;
border-radius: ${borders.circleBorderRadius};
background-color: ${colors.whiteTotal};
`;
