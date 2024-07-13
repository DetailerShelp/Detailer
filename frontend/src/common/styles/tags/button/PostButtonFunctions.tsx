import { ImageComponentsTypes } from "@/common/svg-helper";
import { FC } from "react";
import styled from "styled-components";
import {
  absCenter,
  clampText,
  flexCenter,
  hoverActive,
  resetButton,
} from "@/common/styles/mixins";
import { borders, colors, fonts } from "@/common/styles/styleConstants";
import SvgHelper from "@/common/svg-helper/SvgHelper";

const ButtonWrapper = styled("div")`
  ${flexCenter}
  column-gap: 10px;
`;

const Button = styled("button")`
  ${resetButton}

  width: 35px;
  aspect-ratio: 1;
  border-radius: ${borders.circleBorderRadius};
  background-color: transparent;
  position: relative;

  ${hoverActive}
`;

const ButtonIcon = styled(SvgHelper)`
  ${absCenter}
  z-index: 1;
`;

const ButtonCount = styled("span")`
  ${clampText(fonts.sizes.extraSmall, fonts.sizes.extraSmallMobile)}
  color: ${colors.grayAccent};
  user-select: none;
`;

interface PostButtonFunctionsProps {
  title: string;
  icon: ImageComponentsTypes;
  count?: number;
}

export const PostButtonFunctions: FC<PostButtonFunctionsProps> = ({
  title,
  icon,
  count,
}) => {
  return (
    <ButtonWrapper>
      <Button title={title}>
        <ButtonIcon iconName={icon} />
      </Button>
      {!!count && <ButtonCount>{count}</ButtonCount>}
    </ButtonWrapper>
  );
};
