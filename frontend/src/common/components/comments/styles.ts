import { hoverActive, resetButton, square } from "@/common/styles/mixins";
import { colors, fonts, transitions } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const CommentsWrapper = styled('div')`
display: flex;
height: 100%;
overflow-y: scroll;
flex-direction: column;
justify-content: space-around;

&::-webkit-scrollbar {
    width: 0;
}
`;

export const CommentThread = styled('div')``;

export const AnswersWrapper = styled('div')`
margin-left: 30px;
`;

export const CommentWrapper = styled('div')`
display: flex;
padding: 10px 0;
transition: ${transitions.fastTransition};

${hoverActive}
`;

export const CommentAvatar = styled('div')`
margin: 10px 10px 0 0;
${square(40)}
`;

export const CommentInformation = styled('div')`
max-width: 190px;
`;

export const CommentAuthor = styled('p')`
font-size: ${fonts.sizes.extraSmall}px;
font-weight: ${fonts.weights.semiBold};
margin-right: 2px;
`;

export const CommentTimeSending = styled('span')`
margin-left: 5px;
font-size: ${fonts.sizes.extraSmallMobile}px;
font-weight: ${fonts.weights.regular};
color: ${colors.grayAccent};
`;

export const CommentMessage = styled('p')`
font-size: ${fonts.sizes.smallMobile}px;
font-weight: ${fonts.weights.regular};
`;

export const CommentAnswer = styled('button')`
${resetButton}
font-size: ${fonts.sizes.extraSmallMobile}px;
font-weight: ${fonts.weights.medium};
color: ${colors.grayAccent};
`;

export const CommentLikesWrapper = styled('div')`
margin-left: auto;
text-align: center;
`;

export const CommentLikesCount = styled('p')`
font-size: ${fonts.sizes.extraSmallMobile}px;
font-weight: ${fonts.weights.medium};
color: ${colors.grayAccent};
`;

export const AnswersDropDownWrapper = styled('div')`
`;

export const AnswersDropDownBtn = styled('button')`
${resetButton}
margin-left: 30px;
font-size: ${fonts.sizes.smallMobile}px;
font-weight: ${fonts.weights.medium};
color: ${colors.grayAccent};
`;