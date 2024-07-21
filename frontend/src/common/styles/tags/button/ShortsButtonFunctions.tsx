import { ImageComponentsTypes } from "@/common/svg-helper";
import styled from "styled-components";
import {
  absCenter,
  clampText,
  flexCenter,
  hoverActive,
  resetButton,
} from "@/common/styles/mixins";
import {
  borders,
  colors,
  device,
  fonts,
  shadows,
} from "@/common/styles/styleConstants";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { FC } from "react";

const ButtonWrapper = styled("div")`
  ${flexCenter}

  flex-direction: column;
  row-gap: 10px;

  @media ${device.mobile} {
    row-gap: 5px;
  }
`;

const Button = styled("button")`
  ${resetButton}

  width: 60px;
  aspect-ratio: 1;
  border: ${borders.defaultBorder};
  border-radius: ${borders.circleBorderRadius};
  box-shadow: ${shadows.defaultShadow};
  background-color: ${colors.whiteTotal};
  position: relative;

  ${hoverActive}

  @media ${device.mobile} {
    width: 40px;
  }
`;

const ButtonIcon = styled(SvgHelper)`
  ${absCenter}
  z-index: 1;

  @media ${device.mobile} {
    width: 20px;
  }
`;

const ButtonCount = styled("span")`
  ${clampText(fonts.sizes.small, fonts.sizes.smallMobile)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.blackTotal};
  user-select: none;
`;

interface ShortsButtonFunctionsProps {
  title: string;
  icon: ImageComponentsTypes;
  count?: number;
  click?: () => void; 
}

export const ShortsButtonFunctions: FC<ShortsButtonFunctionsProps> = ({
  title,
  icon,
  count,
  click
}) => {
  return (
    <ButtonWrapper>
      <Button onClick={click}  title={title}>
        <ButtonIcon iconName={icon} />
      </Button>
      {!!count && <ButtonCount>{count}</ButtonCount>}
    </ButtonWrapper>
  );
};
