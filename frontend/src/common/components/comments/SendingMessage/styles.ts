import { colors, fonts } from "@/common/styles/styleConstants";
import styled from "styled-components";


export const SendingMessageWrapper = styled('div')`
display: flex;
justify-content: space-around;
`;

export const SendingMessageInput = styled('input')`
font-size: ${fonts.sizes.smallMobile};
font-weight: ${fonts.weights.regular};
color: ${colors.grayAccent};
`;