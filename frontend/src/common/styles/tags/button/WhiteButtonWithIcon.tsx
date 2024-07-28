import styled from "styled-components";
import { absCenter } from "@/common/styles/mixins";
import { FC } from "react";
import { ButtonWrapper } from "@/common/styles/tags/button/BlackWhiteButton";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { ImageComponentsTypes } from "@/common/svg-helper";

const ButtonIconWrapper = styled("div")<{ size: number }>`
  width: calc(${(props) => props.size}px / 3);
  aspect-ratio: 1;
  position: relative;
`;

const ButtonIcon = styled(SvgHelper)`
  ${absCenter};
  width: 100%;
  aspect-ratio: 1;
`;

interface WhiteButtonProps {
  size: 30 | 40 | 50;
  title: string;
  icon: ImageComponentsTypes;
  click?: () => void; // добавить обработчик клика для кнопки, если есть
}

export const WhiteButtonWithIcon: FC<WhiteButtonProps> = ({
  size,
  title,
  icon,
  click
}) => {
  return (
    <ButtonWrapper color="white" size={size} onClick={click}>
      {title}
      <ButtonIconWrapper size={size}>
        <ButtonIcon iconName={icon} />
      </ButtonIconWrapper>
    </ButtonWrapper>
  );
};
