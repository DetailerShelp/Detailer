import styled from "styled-components";
import { borders, colors } from "@/common/styles/styleConstants";
import { ImageComponentsTypes } from "@/common/svg-helper";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { VisuallyHidden } from "@/common/styles/GlobalStyles";
import { absCenter, hoverActive, resetButton, square } from "@/common/styles/mixins";

const ButtonWrapper = styled("button")<{ $size: number }>`
  ${resetButton};
  ${props => square(props.$size)}

  border-radius: ${borders.circleBorderRadius};
  position: relative;

  ${hoverActive}
`;

const ButtonIcon = styled(SvgHelper)`
  ${absCenter}
  z-index: 1;
  color: ${colors.blackTotal};
`;

interface ButtonWithIconProps {
  size: number;
  icon: ImageComponentsTypes;
  title?: string; // использовать всегда, кроме кнопок для выпадающего меню
  click?: () => void;
}

export const ButtonWithIcon = ({ size, icon, title, click }: ButtonWithIconProps) => {
  return (
    <ButtonWrapper $size={size} title={title} onClick={click} >
      <VisuallyHidden>{title}</VisuallyHidden>
      <ButtonIcon iconName={icon} />
    </ButtonWrapper>
  );
};
