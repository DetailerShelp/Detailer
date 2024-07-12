import styled from "styled-components";
import { borders } from "@/common/styles/styleConstants";
import { ImageComponentsTypes } from "@/common/svg-helper";
import { FC } from "react";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { VisuallyHidden } from "@/common/styles/GlobalStyles";
import { absCenter, hoverActive, resetButton, square } from "@/common/styles/mixins";

const ButtonWrapper = styled("button")<{ size: number }>`
  ${resetButton};
  ${props => square(props.size)}

  border-radius: ${borders.circleBorderRadius};
  position: relative;

  ${hoverActive}
`;

const ButtonIcon = styled(SvgHelper)`
  ${absCenter}
  z-index: 1;
`;

interface ButtonWithIconProps {
  size: number;
  icon: ImageComponentsTypes;
  title: string;
}

export const ButtonWithIcon: FC<ButtonWithIconProps> = ({ size, icon, title }) => {
  return (
    <ButtonWrapper size={size} title={title} >
      <VisuallyHidden>{title}</VisuallyHidden>
      <ButtonIcon iconName={icon} />
    </ButtonWrapper>
  );
};
