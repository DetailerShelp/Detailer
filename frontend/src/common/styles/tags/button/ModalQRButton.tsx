import styled from "styled-components";
import {
  clampText,
  flexCenter,
  hoverActive,
  resetButton,
  square,
} from "@/common/styles/mixins";
import { borders, colors, device, fonts } from "@/common/styles/styleConstants";
import { ImageComponentsTypes } from "@/common/svg-helper";
import SvgHelper from "@/common/svg-helper/SvgHelper";

const Button = styled("button")`
  ${resetButton}
  ${flexCenter}
  column-gap: 10px;
  width: 100%;
  height: 50px;
  border-radius: ${borders.mediumBorderRadius};
  /* border-top: ${borders.defaultBorder}; */
  color: ${colors.blackTotal};

  /* @media ${device.mobileLAbove} {
    &:last-child {
      border-bottom: ${borders.defaultBorder};
    }
  } */

  @media ${device.mobileL} {
    ${square(50)}
    border-radius: ${borders.circleBorderRadius};
    border: none;
  }

  ${hoverActive}
`;

const Text = styled("span")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};
  white-space: nowrap;

  @media ${device.mobileL} {
    display: none;
  }
`;

const Icon = styled(SvgHelper)`
  width: 30px;
  height: 30px;
`;

interface ModalQRButtonProps {
  title: string;
  icon: ImageComponentsTypes;
  click?: () => void;
}

export const ModalQRButton = ({ title, icon, click }: ModalQRButtonProps) => {
  return (
    <Button onClick={click}>
      <Icon iconName={icon} />
      <Text>{title}</Text>
    </Button>
  );
};
