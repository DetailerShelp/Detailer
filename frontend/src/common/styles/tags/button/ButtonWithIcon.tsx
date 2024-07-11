import styled from "styled-components";
import { borders, colors } from "../../styleConstants";
import { ImageComponentsTypes } from "@/common/svg-helper";
import { FC } from "react";
import SvgHelper from "@/common/svg-helper/SvgHelper";

const ButtonWrapper = styled("button")<{ size: number }>`
  width: ${(props) => `${props.size}px`};
  aspect-ratio: 1;
  border-radius: ${borders.circleBorderRadius};
  position: relative;

  &:hover {
    background-color: ${colors.whiteBackground};
  }

  &:active {
    background-color: ${colors.grayBorder};
  }
`;

const ButtonIcon = styled(SvgHelper)`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: 1;
`;

interface ButtonWithIconProps {
  size: number;
  icon: ImageComponentsTypes;
  title?: string;
}

export const ButtonWithIcon: FC<ButtonWithIconProps> = ({ size, icon, title }) => {
  return (
    <ButtonWrapper size={size} title={title} >
      <ButtonIcon iconName={icon} />
    </ButtonWrapper>
  );
};
