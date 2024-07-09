import { borders, colors, fonts, shadows, transitions } from "@/common/styles/styleConstants";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const AuthWrapper = styled('div')`
display: flex;
flex-direction: column;
justify-content: center;
gap: 25px;
align-items: center;
height: 100vh;
`;

export const AuthContentWrapper = styled('div')``;

export const AuthForm = styled('form')`
position: relative;
padding: 65px 170px;
margin-bottom: 25px;
text-align: center;
background-color: ${colors.whiteTotal};
box-shadow: ${shadows.defaultShadow};
border: ${borders.defaultBorder};
border-radius: ${borders.bigBorderRadius};
`;

export const AuthImg = styled('img')`
margin-bottom: 50px;
`; // remove and add in common styles

export const AuthTitle = styled('p')`
font-size: ${fonts.sizes.title};
font-weight: ${fonts.weights.semiBold};
margin-bottom: 25px;
`;

export const AuthDescription = styled('p')`
width: 380px;
font-size: ${fonts.sizes.main};
font-weight: ${fonts.weights.medium};
margin-bottom: 47px;
`;

export const AuthLink = styled(Link)`
font-size: ${fonts.sizes.subTitle};
font-weight: ${fonts.weights.medium};
transition: ${transitions.fastTransition};

&:hover {
    text-decoration: underline;
}
`;

export const AuthInputWrapper = styled('div')`
display: flex;
flex-direction: column;
gap: 6px;
text-align: left;
margin-bottom: 25px;
`;

export const AuthLabel = styled('label')`
margin-left: 22px;
font-size: ${fonts.sizes.subTitle};
font-weight: ${fonts.weights.medium};
`;

export const AuthInput = styled('input')`
padding: 19px 22px;
font-size: ${fonts.sizes.main};
font-weight: ${fonts.weights.regular};
color: ${colors.grayDark};
border: ${borders.borderGrayDark};
border-radius: 60px;
`;

export const AuthCheckBoxWrapper = styled('div')`
display: flex;
gap: 15px;
text-align: left;
margin-bottom: 28px;
`;

export const AuthCheckBoxInput = styled('input')`
margin: auto 0 auto 22px;
width: 30px;
height: 30px;
border-radius: ${borders.checkBoxBorderRadius};
border: ${borders.borderGrayDark};

&:checked {
    background: ${colors.blackTotal};
}
`;

export const AuthCheckBoxLabel = styled('label')`
font-size: ${fonts.sizes.small};
font-weight: ${fonts.weights.regular};
`;

export const AuthButton = styled('button')`
width: 100%;
padding: 15px 0;
border-radius: ${borders.biggestBorderRadius};
border: ${borders.borderBlack};
color: ${colors.whiteTotal};
font-size: ${fonts.sizes.subTitle};
font-weight: ${fonts.weights.regular};
background-color: ${colors.blackTotal};
transition: ${transitions.fastTransition};

&:hover {
    background-color: ${colors.whiteTotal};
    color: ${colors.blackTotal};
}
`;

export const AuthSeparator = styled('div')`
margin: 35px 0;
border: ${borders.borderGrayDark};
`;

export const AuthSwitch = styled('div')`
padding: 38px 0;
background-color: ${colors.whiteTotal};

text-align: center;
font-size: ${fonts.sizes.subTitle};
font-weight: ${fonts.weights.regular};
color: ${colors.grayDark};

box-shadow: ${shadows.defaultShadow};
border: ${borders.defaultBorder};
border-radius: ${borders.bigBorderRadius};
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
top: 82px;
left: 68px;
`;

export const AuthBackLinkImg = styled('img')``;