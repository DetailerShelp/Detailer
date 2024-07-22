import styled from "styled-components";
import {
  buttonHoverActive,
  clampText,
  flexCenter,
  resetButton,
} from "@/common/styles/mixins";
import { borders, colors, device, fonts } from "@/common/styles/styleConstants";
import { FC } from "react";

export const ButtonWrapper = styled("button")<{ color: string; size: number }>`
  ${resetButton}
  ${flexCenter}

  position: relative;

  height: ${(props) => props.size}px;
  width: calc(${(props) => props.size}px * 6);
  column-gap: 10px;

  border: ${borders.borderBlack};
  border-radius: ${borders.bigBorderRadius};
  background-color: ${(props) =>
    props.color === "black" ? colors.blackTotal : "transparent"};
  color: ${(props) =>
    props.color === "white" ? colors.blackTotal : colors.whiteTotal};

  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};

  &:active {
    background-color: ${(props) =>
      props.color === "black" ? colors.blackActive : colors.grayText};
    border-color: ${(props) => props.color === "black" && colors.blackActive};
  }

  @media ${device.mobile} {
    height: calc(${(props) => props.size}px / 1.2);
    width: calc(${(props) => props.size}px * 4);

    ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  }

  ${buttonHoverActive}
`;

interface BlackWhiteButtonProps {
  color: "white" | "black";
  size: 30 | 40 | 50;
  title: string;
}

export const BlackWhiteButton: FC<BlackWhiteButtonProps> = ({
  color,
  size,
  title,
}) => {
  return (
    <ButtonWrapper color={color} size={size}>
      {title}
    </ButtonWrapper>
  );
};
