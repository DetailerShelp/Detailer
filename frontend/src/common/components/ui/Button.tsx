import { mainFont, colors, transitions, borders, fonts } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const DefaultButton = styled('button')`
  all: unset;
  font-family: ${mainFont};
  font-weight: 500;
  font-size: 18px;
  color: ${colors.whiteTotal};
  transition: ${transitions.mediumTransition};

  //TODO подумать как меняется кнопка при клике и наведении 
  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const Button = styled('button')`
border-radius: ${borders.bigBorderRadius};
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