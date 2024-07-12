import { css } from "styled-components";
import { colors, screen } from "@/common/styles/styleConstants";

//HELPER to use mixin with props in styled-components write: ${props => mixin(props.yourProps)}

export const clampText = (min: number, max: number) => css`
    font-size: clamp(${min}px, ${max / screen.fullScreenWidth * 100}vw, ${max}px);
`;

export const resetLink = css`
  color: inherit;
  text-decoration: none;
`;

export const resetButton = css`
  background-color: transparent;
  border: none;
  padding: 0;
`;

export const absCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const square = (size: number) => css`
  width: ${size}px;
  aspect-ratio: 1;
`;

export const hoverActive = css`
  &:hover {
    background-color: ${colors.whiteBackground};
  }

  &:active {
    background-color: ${colors.grayBorder};
  }
`;
