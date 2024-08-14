import { ImageComponentsTypes } from "@/common/svg-helper";
import styled from "styled-components";
import {
  clampText,
  flexCenter,
  hoverActive,
  resetButton,
  square,
} from "@/common/styles/mixins";
import { borders, colors, fonts } from "@/common/styles/styleConstants";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { normalizeCount } from "@/common/helpers/countHelpers";

const ButtonWrapper = styled("div")`
  ${flexCenter}
  column-gap: 5px;
`;

const Button = styled("button")`
  ${resetButton}
  ${flexCenter}
  ${square(35)}

  border-radius: ${borders.circleBorderRadius};
  color: ${colors.blackTotal};
  background-color: transparent;

  ${hoverActive}
`;

const ButtonIcon = styled(SvgHelper)`
  ${flexCenter}
`;

const ButtonCount = styled("span")`
  ${clampText(fonts.sizes.dropdownMobile, fonts.sizes.dropdown)}
  color: ${colors.grayAccent};
  user-select: none;
`;

interface PostButtonFunctionsProps {
  title: string;
  icon: ImageComponentsTypes;
  count?: number;
}

export const PostButtonFunctions = ({
  title,
  icon,
  count,
}: PostButtonFunctionsProps) => {
  return (
    <ButtonWrapper>
      <Button title={title}>
        <ButtonIcon iconName={icon} />
      </Button>
      {!!count && <ButtonCount>{normalizeCount(count)}</ButtonCount>}
    </ButtonWrapper>
  );
};
