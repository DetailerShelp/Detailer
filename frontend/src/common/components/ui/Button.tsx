import { mainFont, colors, transitions } from "@/common/styles/styleConstants";
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
    cursor: pointer;
  }

  &:active {
    opacity: 0.5;
    cursor: pointer;
  }
`;