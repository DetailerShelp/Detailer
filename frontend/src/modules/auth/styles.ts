import { clampText, flexCenter } from "@/common/styles/mixins";
import { borders, colors, device, fonts, shadows, transitions } from "@/common/styles/styleConstants";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const AuthWrapper = styled('div')`
${flexCenter};
flex-direction: column;
gap: 25px;
height: 100vh;
`;

export const AuthContentWrapper = styled('div')`
display: flex;
flex-direction: column;
gap: 25px;

@media ${device.mobile} {
    gap: 10px;
}

@media (max-height: 650px) {
    overflow-y: scroll;
}
`;

export const AuthForm = styled('form')`
position: relative;
width: 700px;
${flexCenter};
flex-direction: column;
padding: 65px 170px;
text-align: center;
background-color: ${colors.whiteTotal};
box-shadow: ${shadows.defaultShadow};
border: ${borders.defaultBorder};
border-radius: ${borders.mediumBorderRadius};

@media ${device.mobile} {
    width: 450px;
    padding: 40px 100px;
}

@media ${device.mobileL} {
    width: 350px;
    padding: 20px 60px;
}

@media ${device.mobileM} {
    width: 320px;
    padding: 20px 60px;
}

@media ${device.mobileS} {
    width: 300px;
    padding: 20px 20px;
}
`;

export const AuthTitle = styled('p')`
${clampText(fonts.sizes.mainMobile, fonts.sizes.title)};
font-weight: ${fonts.weights.semiBold};

@media ${device.mobileL} {
    margin-bottom: 15px;
}

@media ${device.mobileS} {
    margin-bottom: 10px;
}
`;

export const AuthDescription = styled('p')`
width: 380px;
${clampText(fonts.sizes.mainMobile, fonts.sizes.main)};
font-weight: ${fonts.weights.medium};
margin-bottom: 40px;

@media ${device.mobile} {
    width: 330px;
    margin-bottom: 30px;
}

@media ${device.mobileL} {
    width: 280px;
    margin-bottom: 25px;
}

@media ${device.mobileS} {
    width: 250px;
    margin-bottom: 15px;
}
`;

export const AuthLink = styled(Link)`
${clampText(fonts.sizes.mainMobile, fonts.sizes.main)};
font-weight: ${fonts.weights.medium};
transition: ${transitions.fastTransition};

&:hover {
    text-decoration: underline;
}
`;

export const AuthInputWrapper = styled('div')`
width: 100%;
display: flex;
flex-direction: column;
gap: 6px;
text-align: left;
margin-bottom: 25px;

@media ${device.mobile} {
    margin-bottom: 15px;
}

@media ${device.mobileM} {
    margin-bottom: 10px;
}

@media ${device.mobileS} {
    margin-bottom: 5px;
}
`;

export const AuthLabel = styled('label')`
margin-left: 22px;
${clampText(fonts.sizes.mainMobile, fonts.sizes.main)};
font-weight: ${fonts.weights.medium};
`;

export const AuthInput = styled('input')`
padding: 19px 22px;
${clampText(fonts.sizes.mainMobile, fonts.sizes.main)};
font-weight: ${fonts.weights.regular};
color: ${colors.grayAccent};
border: ${borders.borderGrayAccent};
border-radius: 60px;

@media ${device.mobile} {
    padding: 15px 18px;
}

@media ${device.mobileM} {
    padding: 10px 12px;
}

@media ${device.mobileS} {
    padding: 5px 8px;
}
`;

export const AuthCheckBoxWrapper = styled('div')`
display: flex;
gap: 15px;
text-align: left;
margin-bottom: 28px;

@media ${device.mobileL} {
    gap: 10;
    margin-bottom: 15px;
}
`;

export const AuthCheckBoxInput = styled('input')`
margin: auto 0 auto 22px;
width: 30px;
height: 30px;
border-radius: ${borders.smallBorderRadius};
border: ${borders.borderGrayAccent};

&:checked {
    background: ${colors.blackTotal};
}

@media ${device.mobile} {
    width: 25px;
    height: 25px;
}

`;

export const AuthCheckBoxLabel = styled('label')`
width: 250px;
${clampText(fonts.sizes.smallMobile, fonts.sizes.small)};
font-weight: ${fonts.weights.regular};

@media ${device.mobile} {
    width: 200px;
}

@media ${device.mobileL} {
    width: 100%;
}
`;

export const AuthSeparator = styled('div')`
margin: 35px 0;
width: 100%;
border: ${borders.borderGrayAccent};

@media ${device.mobile} {
    margin: 10px 0;
}
`;

export const AuthSwitchWrapper = styled('div')`
padding: 38px 0;
background-color: ${colors.whiteTotal};

text-align: center;
${clampText(fonts.sizes.mainMobile, fonts.sizes.main)};
font-weight: ${fonts.weights.regular};
color: ${colors.grayAccent};

box-shadow: ${shadows.defaultShadow};
border: ${borders.defaultBorder};
border-radius: ${borders.mediumBorderRadius};

@media ${device.mobile} {
    padding: 20px 0;
}

@media ${device.mobileM} {
    padding: 15px 0;
}
`;

export const AuthSwitchLink = styled(Link)`
color: ${colors.blackTotal};
font-weight: ${fonts.weights.medium};
transition: ${transitions.fastTransition};

&:hover {
    text-decoration: underline;
}
`;

export const AuthBackLink = styled(Link)`
position: absolute;
content: '';
top: 65px;
left: 20px;

@media ${device.mobile} {
    top: 40px;
}

@media ${device.mobileL} {
    top: 20px;
}
`;